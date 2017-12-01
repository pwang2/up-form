<template>
<div>
  <div v-if="type==='LIST_BEAN'">
    <div v-if='value.length===0' style="display:flex;">
      <div class="config-name" v-text="def && def.label"></div>
      <v-btn icon @click="add" style="flex-grow:0"> <v-icon>add</v-icon> </v-btn>
    </div>
    <div v-for="(listBeanValue,index) in item.value" :key="index" class="list-bean">
      <v-card class="list-bean-edit-wrap">
          <div class="config-name" v-text="def && def.label"></div>
          <field-entry v-for="(entry, index2) in def.model.configDefinitions"
                       :key='index2'
                       :configuration="listBeanValue"
                       :def="def.model.configDefinitions.find(c=>c.name===entry.name)"
                       :listbeanIndex="index"
                       :listbean="'true'" >
          </field-entry>
      </v-card>
      <div class="list-bean-add-remove">
        <v-btn icon @click="remove(index)"><v-icon>remove</v-icon></v-btn>
        <v-btn icon @click="add" v-if='index===value.length-1'><v-icon>add</v-icon></v-btn>
      </div>
    </div>
  </div>
  <div v-else class="config-field-wrap" v-show="dependSatisfied">
    <div class="config-name">
      <span class="config-label" v-text="def && def.label"></span>
      <span class="config-icon" v-if="def && def.description" v-tooltip:right="{html: def.description}"><v-icon>info</v-icon></span>
    </div>
    <div class="config-input">
      <component :disabled="pipeline.status==='RUNNING'" :is="type" :type="type" :item="item" :name="def.name" :value="value" :def="def" :listbean="listbean"></component>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import EL_BOOLEAN from './EL_BOOLEAN';
import EL_SINGLE from './EL_SINGLE';
import EL_LIST from './EL_LIST';
import EL_MAP from './EL_MAP';
import VALUE_CHOOSER from './VALUE_CHOOSER';
import FIELD_SELECTOR_MULTI_VALUE from './FIELD_SELECTOR_MULTI_VALUE';

const FieldEntry = {
  // listbeanIndex is used to target the issue to the correct listbean item
  props: ['configuration', 'def', 'listbeanIndex', 'listbean'],
  computed: {
    ...mapState(['pipeline']),
    isListbean() {
      return this.listbean === 'true';
    },
    item() {
      // in list bean, item is a hash object {k1:v1,k2:v2} to be updated in mutation
      // in normal case, item is {name:'', value:''} to be updated in mutation
      if (this.isListbean) return this.configuration;
      return this.configuration.find(c => c.name === this.def.name) || {};
    },
    value() {
      const storedValue = this.isListbean
        ? this.item[this.def.name]
        : this.item.value;
      if (storedValue === undefined || storedValue === null) {
        return this.def.defautValue;
      }
      return storedValue;
    },
    type() {
      if (!this.def) return null;
      if (this.def.type !== 'MODEL') return `EL_${this.def.type}`;
      return this.def.model.modelType;
    },
    dependSatisfied() {
      if (!this.def) return false;
      const dependsOnMap = this.def.dependsOnMap || {};
      const keys = Object.keys(dependsOnMap);
      if (this.isListbean) {
        return keys.every(k => dependsOnMap[k].includes(this.item[k]));
      }
      return keys.every(k => {
        const match = this.configuration.find(c => c.name === k);
        if (!match) return true;
        return dependsOnMap[k].includes(match.value);
      });
    }
  },
  methods: {
    ...mapMutations(['DELETE_FROM_CONFIGURATION_LISTITEM', 'ADD_TO_CONFIGURATION_LISTITEM']),
    remove(index) {
      this.DELETE_FROM_CONFIGURATION_LISTITEM({
        name: this.name,
        item: this.item,
        listbean: false,
        index
      });
    },
    add() {
      const reducer = (prev, cur) =>
        Object.assign(prev, { [cur.name]: cur.defaultValue });
      const defaults = this.def.model.configDefinitions.reduce(reducer, {});
      this.ADD_TO_CONFIGURATION_LISTITEM({
        name: this.name,
        item: this.item,
        value: defaults,
        listbean: false
      });
    },
  },
  components: {
    EL_STRING: EL_SINGLE,
    EL_NUMBER: EL_SINGLE,
    EL_TEXT: EL_SINGLE,
    EL_CHARACTER: EL_SINGLE,
    FIELD_SELECTOR: VALUE_CHOOSER,
    MULTI_VALUE_CHOOSER: VALUE_CHOOSER,
    FIELD_SELECTOR_MULTI_VALUE,
    EL_BOOLEAN,
    EL_LIST,
    EL_MAP,
    VALUE_CHOOSER
  }
};
Vue.component('field-entry', FieldEntry);
export default FieldEntry;
</script>

<style>
.list-bean {
  display: flex;
  align-items: flex-end;
}
.list-bean-edit-wrap {
  padding: 20px;
  background-color: #515151 !important;
  border-radius: 6px;
  flex-grow: 1;
}
.list-bean-edit-wrap:not(:last-child) {
  margin-bottom: 10px;
}
.list-bean-add-remove {
  flex-basis: 60px;
  padding-bottom: 20px;
}
.config-field-wrap {
  display: flex;
  flex-wrap: nowrap;
}
.config-name {
  flex: 0 0 240px;
  height: 50px;
  padding-top: 18px;
  font-size: 13px;
  color: #9c9c9c;
  display: flex;
  justify-content: space-between;
}
.config-label {
  display: flex;
  align-items: center;
}
.list-bean-edit-wrap .config-field-wrap .config-name {
  flex: 0 0 220px;
}
.config-name [data-tooltip]:before {
  width: 240px;
  white-space: pre-wrap;
}
.config-icon {
  display: flex;
  align-items: center;
}
.config-icon .icon {
  font-size: 18px;
  float: right;
}
.config-input {
  margin-left: 20px;
  flex-grow: 1;
}
</style>

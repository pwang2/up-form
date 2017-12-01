<template>
  <div class="map-edit-wrap">
    <v-btn icon
           v-if='value.length===0'
           @click="add('','')">
      <v-icon>add</v-icon>
    </v-btn>
    <div class="map-item"
         :key="index"
         v-for="(item,index) in value">
      <div class="map-kv-pair">
        <v-text-field class="map-key"
                      hide-details
                      :disabled="disabled"
                      :value="item.key"
                      @input="updateItem($event, value[index].value, index)"></v-text-field>
        <v-text-field class="map-value"
                      hide-details
                      :disabled="disabled"
                      :value="item.value"
                      @input="updateItem(value[index].key, $event, index)"></v-text-field>
      </div>
      <div class="map-add-remove">
        <v-btn icon
               @click="remove(index)">
          <v-icon>remove</v-icon>
        </v-btn>
        <v-btn icon
               v-if='index===value.length-1'
               @click="add('','')">
          <v-icon>add</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'debounce';
import { mapMutations } from 'vuex';

export default {
  props: ['disabled', 'item', 'name', 'value', 'def', 'listbean'],
  methods: {
    ...mapMutations([
      'DELETE_FROM_CONFIGURATION_LISTITEM',
      'ADD_TO_CONFIGURATION_LISTITEM',
      'UPDATE_CONFIGURATION_LISTITEM'
    ]),

    remove(index) {
      this.DELETE_FROM_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        listbean: this.listbean,
        index
      });
    },
    add(key = '', value = '') {
      this.ADD_TO_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        value: { key, value },
        listbean: this.listbean
      });
    },
    updateItem: debounce(function(key, value, index) {
      this.UPDATE_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        value: { key, value },
        listbean: this.listbean,
        index
      });
    }, 300)
  }
};
</script>

<style>
.map-item {
  display: flex;
  justify-content: end;
}
.map-kv-pair {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}
.map-key {
  flex: 0 1 400px;
}
.map-value {
  margin-left: 20px;
  flex: 0 1 400px;
}
.map-add-remove {
  flex: 0 0 160px;
}
</style>

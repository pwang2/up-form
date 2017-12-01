<template>
  <div class="list-edit-wrap">
    <div class="list-add-remove">
      <v-btn icon
             v-if='value.length===0'
             @click="add">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div class="list-item"
         :key="index"
         v-for="(item, index) in value">
      <div class="list-input">
        <v-text-field class="list-input-box"
                      hide-details
                      :disabled="disabled"
                      :value="item"
                      @input="updateItem(index,$event)"></v-text-field>
      </div>
      <div class="list-add-remove">
        <v-btn icon
               @click="remove(index)">
          <v-icon>remove</v-icon>
        </v-btn>
        <v-btn icon
               v-if='index===value.length-1'
               @click="add">
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
    add() {
      this.ADD_TO_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        listbean: this.listbean,
        value: ''
      });
    },
    updateItem: debounce(function(index, value) {
      this.UPDATE_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        listbean: this.listbean,
        index,
        value
      });
    }, 1000)
  }
};
</script>

<style>
.list-edit-wrap {
  counter-reset: section;
}
.list-item {
  display: flex;
  justify-content: left;
}
.list-input {
  flex: 0 1 600px;
}
.list-add-remove {
  flex: 0 0 160px;
}
.list-add-remove .btn--icon {
  width: 32px;
  height: 32px;
  margin-top: 18px;
  margin-bottom: 0;
}
.list-input-box {
  margin: 0 0 0 20px;
  width: calc(100% - 20px);
}
.list-input-box::before {
  position: absolute;
  left: -16px;
  line-height: 30px;
  counter-increment: section;
  content: counter(section);
}
</style>

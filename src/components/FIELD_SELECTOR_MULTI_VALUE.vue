<template>
  <div class="field-select-wrap">
    <v-select autocomplete
              chips
              hide-details
              multiple
              :disabled="disabled"
              :items="options"
              :value="value"
              @input="add"></v-select>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: ['disabled', 'type', 'item', 'name', 'value', 'def', 'listbean'],
  data() {
    return { remoteFields: [] };
  },
  computed: {
    ...mapState(['pipeline']),
    options() {
      return Array.from(new Set([...this.remoteFields, ...this.value]));
    }
  },
  methods: {
    ...mapMutations([
      'DELETE_FROM_CONFIGURATION_LISTITEM',
      'UPDATE_CONFIGURATION_SINGLE_ITEM'
    ]),
    remove(index) {
      this.DELETE_FROM_CONFIGURATION_LISTITEM({
        item: this.item,
        name: this.name,
        listbean: this.listbean,
        index
      });
    },
    add(newValue) {
      // replace array as single item
      this.UPDATE_CONFIGURATION_SINGLE_ITEM({
        item: this.item,
        name: this.name,
        value: newValue,
        listbean: this.listbean
      });
    }
  }
};
</script>

<style>
.field-select-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
}

.field-select-wrap .chip {
  margin-top: 2px;
  margin-bottom: 2px;
}
.field-select-wrap .input-group {
  flex-basis: 100px;
}
</style>

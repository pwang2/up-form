<template>
  <v-checkbox hide-details
              :disabled="disabled"
              :input-value="displayValue"
              :label="name"
              @change="toggle"></v-checkbox>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['disabled', 'item', 'name', 'value', 'def', 'listbean'],
  computed: {
    displayValue() {
      if (this.value !== undefined || this.value !== null) return this.value;
      return this.def.defaultValue;
    }
  },
  methods: {
    ...mapMutations(['UPDATE_CONFIGURATION_SINGLE_ITEM']),
    toggle(value) {
      this.UPDATE_CONFIGURATION_SINGLE_ITEM({
        name: this.name,
        item: this.item,
        listbean: this.listbean,
        value
      });
    }
  }
};
</script>

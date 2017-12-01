<template>
  <v-select :disabled="disabled"
    :multiple="multiChoose"
    :chips="multiChoose"
    :items="items"
    :value="value"
    item-text="optionLabel"
    item-value="optionValue"
    hide-details
    outline
    small
    @change="select"
    ></v-select>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: ['disabled', 'type', 'item', 'name', 'value', 'def', 'listbean'],
  computed: {
    items() {
      return (this.def.model.values || []).map((v, i) => ({
        optionLabel: this.def.model.labels[i],
        optionValue: v
      }));
    },
    multiChoose() {
      return this.type === 'MULTI_VALUE_CHOOSER';
    }
  },
  methods: {
    select(value) {
    }
  }
};
</script>

<style>
.input-group--chips .chip {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 13px;
  height: 26px;
}
</style>

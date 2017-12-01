<template>
  <div>
    <v-codemirror :disabled="disabled"
                  :value="value"
                  v-if="multiLine"
                  @input="changeValue"></v-codemirror>
    <v-text-field hide-details
                  :disabled="disabled"
                  :value="value"
                  v-else
                  @input="changeValue"></v-text-field>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import debounce from 'debounce';
import codemirror from './_codemirror-sonar-ignore';

export default {
  props: ['disabled', 'type', 'item', 'name', 'value', 'def', 'listbean'],
  computed: {
    multiLine() {
      if (!this.def || !this.value) return false;
      return this.def.lines > 1 || String(this.value).indexOf('\n') > 0;
    },
    displayValue() {
      return this.value || this.def.defaultValue;
    }
  },
  methods: {
    ...mapMutations(['UPDATE_CONFIGURATION_SINGLE_ITEM']),
    changeValue: debounce(function(value) {
      this.UPDATE_CONFIGURATION_SINGLE_ITEM({
        name: this.name,
        item: this.item,
        listbean: this.listbean,
        value
      });
    }, 400)
  },
  components: {
    VCodemirror: codemirror
  }
};
</script>

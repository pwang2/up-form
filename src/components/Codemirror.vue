<template>
  <textarea :value='value'></textarea>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

export default {
  props: {
    value: String,
    options: {
      type: Object,
      default() {
        return {
          mode: 'text/x-scala',
          json: true,
          theme: 'monokai',
          lineNumbers: true,
          lineWrapping: true
        };
      }
    }
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(this.$el, this.options);
    this.editor.on('change', cm => {
      this.$emit('change', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  beforeDestroy() {
    this.editor.doc.cm.getWrapperElement().remove();
  }
};
</script>

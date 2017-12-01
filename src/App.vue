<template>
  <v-app dark
         standalone>
    <v-toolbar dark
               dense
               prominent>
      <v-toolbar-title><img alt="logo"
           height="16"
           src='./assets/logo.svg'
           width="128"></v-toolbar-title>
      <v-btn icon
             style="margin-left:auto">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>people</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-card-title>
        <v-layout row>
          <v-flex xs12>
            <field-entry :configuration="configuration"
                         :def='defInventory.find(d=&gt;d.name===def.name)'
                         :key="index"
                         :listbean="'false'"
                         v-for="(def, index) in sortedDefInventory"></field-entry>
          </v-flex>
        </v-layout>
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import FieldEntry from './components/_FieldEntry.vue';

export default {
  name: 'app',

  computed: {
    ...mapState(['definitions', 'pipeline']),
    configuration() {
      return this.pipeline.configuration;
    },
    defInventory() {
      return this.definitions.configDefinitions;
    },
    sortedDefInventory() {
      return this.defInventory
        .slice()
        .sort((a, b) => a.displayPosition - b.displayPosition);
    }
  },
  components: {
    FieldEntry
  }
};
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main.styl'
</style>

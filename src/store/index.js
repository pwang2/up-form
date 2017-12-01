import Vue from 'vue';
import Vuex from 'vuex';
import definitions from './definitions';
import pipeline from './pipeline';

Vue.use(Vuex);
export default function() {
  return new Vuex.Store({
    modules: {
      definitions,
      pipeline
    },
    mutations: {
      DELETE_FROM_CONFIGURATION_LISTITEM(
        state,
        { item, name, index, listbean }
      ) {
        if (listbean === 'true') {
          item[name].splice(index, 1);
        } else {
          item.value.splice(index, 1);
        }
      },
      ADD_TO_CONFIGURATION_LISTITEM(state, { item, name, value, listbean }) {
        if (listbean === 'true') {
          item[name].push(value);
        } else {
          item.value.push(value);
        }
      },
      UPDATE_CONFIGURATION_LISTITEM(
        state,
        { item, name, index, value, listbean }
      ) {
        // see https://vuejs.org/v2/guide/list.html#Caveats
        if (listbean === 'true') {
          Vue.set(item[name], index, value);
        } else {
          Vue.set(item.value, index, value);
        }
      },
      UPDATE_CONFIGURATION_SINGLE_ITEM(state, { item, name, value, listbean }) {
        if (listbean === 'true') {
          item[name] = value;
        } else {
          item.value = value;
        }
      }
    }
  });
}

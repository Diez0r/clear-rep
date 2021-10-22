import { getAccessorType } from 'typed-vuex';
import * as ui from './ui';


// Import all your submodules

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...
// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    ui,
  },
});

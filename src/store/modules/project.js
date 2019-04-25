import listImages from './project_modules/list-images.js';

export default {
  namespaced: true,

  state() {
    return {
      id: null,
      name: null
    };
  },

  mutations: {
    setProject(state, project) {
      state.id = project.id;
      state.name = project.name;
    },
  },

  modules: {
    viewers: {
      namespaced: true
    },
    listImages
  }
};

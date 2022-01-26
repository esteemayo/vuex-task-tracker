import { createStore } from 'vuex';
import tasks from './modules/tasks';

const store = createStore({
  modules: {
    tasks,
  },
});

export default store;

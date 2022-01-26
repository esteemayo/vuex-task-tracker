const tasks = {
  state: () => ({
    tasks: [],
    showAddTask: false,
  }),
  mutations: {
    setTasks: (state, payload) => {
      state.tasks = payload;
    },
    getTask(state, payload) {
      state.tasks = payload;
    },
    newTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task._id !== payload);
    },
    toggleAddTask(state) {
      state.showAddTask = !state.showAddTask;
    },
    setToggleReminder(state, payload) {
      state.tasks = state.tasks.map((task) =>
        task._id === payload._id ? { ...task, reminder: payload.reminder } : task
      );
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const res = await fetch('api/tasks');
      const data = await res.json();

      commit('setTasks', data);
    },
    async fetchTask({ commit }, payload) {
      const res = await fetch(`api/tasks/${payload}`);
      const data = await res.json();

      commit('getTask', data);
    },
    async addTask({ commit }, payload) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      commit('newTask', data);
    },
    async deleteTask({ commit }, payload) {
      await fetch(`api/tasks/${payload}`, {
        method: 'DELETE',
      });

      commit('removeTask', payload);
    },
    async toggleReminder({ commit }, payload) {
      const res = await fetch(`api/tasks/${payload._id}`);
      const taskToToggle = await res.json();

      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const resp = await fetch(`api/tasks/${payload._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      });

      const data = await resp.json();

      commit('setToggleReminder', data);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    showAddTask: (state) => state.showAddTask,
  },
};

export default tasks;

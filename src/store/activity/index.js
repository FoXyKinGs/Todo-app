import axios from 'axios'

const defaultState = {
  listActivity: [],
  detailActivity: {}
}

const state = defaultState

const mutations = {
  INIT_LIST_ACTIVITY (state, payload) {
    state.listActivity = payload
  },
  INIT_DETAIL_ACTIVITY (state, payload) {
    state.detailActivity = payload
  }
}

const actions = {
  getListActivity ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/activity-groups?email=mochrizaldianandakurnia21@gmail.com')
        .then(response => {
          commit('INIT_LIST_ACTIVITY', response.data.data)
          resolve()
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  addActivity (context) {
    return new Promise((resolve, reject) => {
      axios.post('/activity-groups', { email: 'mochrizaldianandakurnia21@gmail.com', title: 'New Activity' })
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  deleteActivity (context, id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/activity-groups/${id}`)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  getDetailActivity ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/activity-groups/${id}`)
        .then(response => {
          commit('INIT_DETAIL_ACTIVITY', response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  changeNameActivity ({ dispatch }, { id, title }) {
    return new Promise((resolve, reject) => {
      axios.patch(`/activity-groups/${id}`, { title })
        .then(response => {
          dispatch('getDetailActivity', id)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  addTodo (context, { activity_group_id, priority ,title }) {
    return new Promise((resolve, reject) => {
      axios.post('/todo-items', { activity_group_id, priority, title })
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  changeTodoStatus ({ dispatch }, { id_params, id, is_active, title }) {
    return new Promise((resolve, reject) => {
      axios.patch(`/todo-items/${id}`, { is_active, title })
        .then(response => {
          dispatch('getDetailActivity', id_params)
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  deleteTodo (context, id) {
    return new Promise((resolve, reject) => {
      axios.delete(`/todo-items/${id}`)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  getDetailTodo (context, id) {
    return new Promise((resolve, reject) => {
      axios.get(`/todo-items/${id}`)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  },
  editTodo (context, { id, is_active, priority, title }) {
    return new Promise((resolve, reject) => {
      axios.patch(`/todo-items/${id}`, { is_active, priority, title })
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(new Error(err))
        })
    })
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters: {
    getListActivity: state => state.listActivity,
    getDetailActivity: state => state.detailActivity
  },
}

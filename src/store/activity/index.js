import axios from 'axios'

const defaultState = {
  listActivity: []
}

const state = defaultState

const mutations = {
  INIT_LIST_ACTIVITY (state, payload) {
    state.listActivity = payload
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
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters: {
    getListActivity: state => state.listActivity
  },
}

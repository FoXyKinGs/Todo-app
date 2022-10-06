import { createStore } from 'vuex'
import ActivityModule from '@/store/activity'

export default createStore({
  state: {
    isModalDeleteOpen: false,
    isModalConfirmedOpen: false,
    isModalAddTodoOpen: false,
    isModalDeleteTodoOpen: false
  },
  getters: {
    getIsModalDeleteOpen: state => state.isModalDeleteOpen,
    getIsModalConfirmedOpen: state => state.isModalConfirmedOpen,
    getIsModalAddTodoOpen: state => state.isModalAddTodoOpen,
    getIsModalDeleteTodoOpen: state => state.isModalDeleteTodoOpen
  },
  mutations: {
    INIT_IS_MODAL_DELETE_OPEN (state, payload) {
      state.isModalDeleteOpen = payload
    },
    INIT_IS_MODAL_CONFIRMED_OPEN (state, payload) {
      state.isModalConfirmedOpen = payload
    },
    INIT_IS_MODAL_ADD_TODO_OPEN (state, payload) {
      state.isModalAddTodoOpen = payload
    },
    INIT_IS_MODAL_DELETE_TODO_OPEN (state, payload) {
      state.isModalDeleteTodoOpen = payload
    }
  },
  actions: {
    changeStatusModalDelete ({ commit }, payload) {
      commit('INIT_IS_MODAL_DELETE_OPEN', payload)
    },
    changeStatusModalConfirmed ({ commit }, payload) {
      commit('INIT_IS_MODAL_CONFIRMED_OPEN', payload)
    },
    changeStatusModalAddTodo ({ commit }, payload) {
      commit('INIT_IS_MODAL_ADD_TODO_OPEN', payload)
    },
    changeStatusModalDeleteTodo ({ commit }, payload) {
      commit('INIT_IS_MODAL_DELETE_TODO_OPEN', payload)
    }
  },
  modules: {
    activity: ActivityModule
  }
})

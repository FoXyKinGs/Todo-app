import { createStore } from 'vuex'
import ActivityModule from '@/store/activity'

export default createStore({
  state: {
    isModalDeleteOpen: false,
    isModalConfirmedOpen: false,
    isModalAddTodoOpen: false,
    isModalDeleteTodoOpen: false,
    isModalEditTodoOpen: false
  },
  getters: {
    getIsModalDeleteOpen: state => state.isModalDeleteOpen,
    getIsModalConfirmedOpen: state => state.isModalConfirmedOpen,
    getIsModalAddTodoOpen: state => state.isModalAddTodoOpen,
    getIsModalDeleteTodoOpen: state => state.isModalDeleteTodoOpen,
    getIsModalEditTodoOPen: state => state.isModalEditTodoOpen
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
    },
    INIT_IS_MODAL_EDIT_TODO_OPEN (state, payload) {
      state.isModalEditTodoOpen = payload
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
    },
    changeStatusModalEditTodo ({ commit }, payload) {
      commit('INIT_IS_MODAL_EDIT_TODO_OPEN', payload)
    }
  },
  modules: {
    activity: ActivityModule
  }
})

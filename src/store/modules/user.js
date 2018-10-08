export default {
  state: {
    token: localStorage.token || '',
    tokenTime: +localStorage.tokenTime || '',
    userInfo: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = localStorage.token = token;
      state.tokenTime = localStorage.tokenTime = Date.now();
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    LOGOUT_USER: state => {
      state.userInfo = null;
      state.token = '';
      state.tokenTime = '';
      localStorage.clear()
    }
  },
  actions: {
    setDevideData({ commit }, data) {
      commit('DEVICE_DATA', data)
    },
    setDriverData({ commit }, data) {
      commit('DRIVER_DATA', data)
    },
    setAgentData({ commit }, data) {
      commit('AGENT_DATA', data)
    },
    loginSuccess({ commit }, data) {
      commit('SET_TOKEN', data)
    },
    userLogout({ commit }) {
      commit('LOGOUT_USER')
    }
  }
}


export default {
  state: {
    device: null,
    driver: null,
    agent: null,
    timeRange: {
      device: '',
      driver: '',
      agent: '',
      apply: ''
    }
  },
  mutations: {
    DEVICE_DATA: (state, data) => {
      state.device = data
    },
    DRIVER_DATA: (state, data) => {
      state.driver = data
    },
    AGENT_DATA: (state, data) => {
      state.agent = data
    },
    DEVICE_TIMERANGE: (state, data) => {
      state.timeRange.device = data
    },
    DRIVER_TIMERANGE: (state, data) => {
      state.timeRange.driver = data
    },
    AGENT_TIMERANGE: (state, data) => {
      state.timeRange.agent = data
    },
    APPLY_TIMERANGE: (state, data) => {
      state.timeRange.apply = data
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
    setDeviceTimeRange({ commit }, data) {
      commit('DEVICE_TIMERANGE', data)
    },
    setDriverTimeRange({ commit }, data) {
      commit('DRIVER_TIMERANGE', data)
    },
    setAgentTimeRange({ commit }, data) {
      commit('AGENT_TIMERANGE', data)
    },
    setApplyTimeRange({ commit }, data) {
      commit('APPLY_TIMERANGE', data)
    }
  }
}


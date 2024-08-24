export default {
  namespaced: true,

  state: () => ({
    // 用户相关的状态
    // userInfo: null,
    // isLoggedIn: false,
  }),

  mutations: {
    // SET_USER_INFO(state, userInfo) {
    //   state.userInfo = userInfo;
    // },
    // SET_LOGGED_IN(state, isLoggedIn) {
    //   state.isLoggedIn = isLoggedIn;
    // },
  },

  actions: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    // login({ commit }, userInfo) {
    //   // 登录逻辑，可能包括API调用
    //   commit("SET_USER_INFO", userInfo);
    //   commit("SET_LOGGED_IN", true);
    // },
    // logout({ commit }) {
    //   commit("SET_USER_INFO", null);
    //   commit("SET_LOGGED_IN", false);
    // },
  },

  getters: {
    // isLoggedIn: (state) => state.isLoggedIn,
    // userInfo: (state) => state.userInfo,
  },
};

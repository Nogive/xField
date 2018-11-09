import * as types from "./types";
const actions = {
  setLoading: function({ commit }, flag) {
    commit(types.set_loading, flag);
  },
  changeAppState: function({ commit }, flag) {
    commit(types.change_app_tate, flag);
  }
};
export default actions;

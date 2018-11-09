import * as types from "./types";
const mutations = {
  [types.set_loading](state, flag) {
    state.isLoading = flag;
  },
  [types.change_app_tate](state, flag) {
    state.appState = flag;
  }
};
export default mutations;

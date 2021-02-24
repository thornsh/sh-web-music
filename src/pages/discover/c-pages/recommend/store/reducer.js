import { Map } from "immutable";
import { CHANGE_TOP_BANNERS } from "./constants";

// const defaultState = {
//   topBanners:[]
// }
const defaultState = Map({
  topBanners:[]
})

function reducer(state = defaultState, action){
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners);
    default:
      return state;
  }
}
// function reducer(state = defaultState, action){
//   switch (action.type) {
//     case CHANGE_TOP_BANNERS:
//       return {...state,topBanners:action.topBanners}
//     default:
//       return state;
//   }
// }

export default reducer;
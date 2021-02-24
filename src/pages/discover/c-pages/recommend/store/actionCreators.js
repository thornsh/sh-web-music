import { getTopBanners } from "@/services/recommend"
import { CHANGE_TOP_BANNERS } from "./constants"

const changeTopBannerAction = (res)=>{
  return {
    type:CHANGE_TOP_BANNERS,
    topBanners:res.banners
  }
}

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res=>{
      dispatch(changeTopBannerAction(res));
    })
  }
}
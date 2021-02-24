import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators';

export default memo(function SHRecommend() {
  const dispatch = useDispatch();

  const recommend = useSelector(state=>{
    return {
      // topBanners:state.recommend.topBanners
      // topBanners:state.recommend.get("topBanners")
      // topBanners:state.get("recommend").get("topBanners")
      topBanners:state.getIn(["recommend","topBanners"])
    }
  },shallowEqual)

  useEffect(()=>{
    dispatch(getTopBannerAction());
  },[dispatch]);

  return (
    <div>
      recommend
      {console.log(recommend.topBanners.length)}
    </div>
  )
})

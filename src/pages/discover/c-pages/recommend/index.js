import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators';

export default memo(function SHRecommend() {
  const dispatch = useDispatch();

  const recommend = useSelector(state=>{
    return {
      topBanners:state.topBanners
    }
  },shallowEqual)

  useEffect(()=>{
    dispatch(getTopBannerAction());
  },[dispatch]);

  return (
    <div>
      recommend
    </div>
  )
})

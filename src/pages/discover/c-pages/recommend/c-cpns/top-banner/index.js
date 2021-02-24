import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';

import {
  BannerLeft,
  BannerWrapper,
  BannerRight,
  BannerControl
} from './style'

export default memo(function SHTopBanner() {
  const dispatch = useDispatch();

  const recommend = useSelector(state=>{
    return {
      // topBanners:state.recommend.topBanners
      // topBanners:state.recommend.get("topBanners")
      // topBanners:state.get("recommend").get("topBanners")
      topBanners:state.getIn(["recommend","topBanners"])
    }
  },shallowEqual)

  const bannerRef = useRef();
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBgImage = useCallback(
    (from,to)=>{
      setCurrentIndex(to);
    },
    []
  )
  const bgImage = recommend.topBanners[currentIndex] && (recommend.topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  useEffect(()=>{
    dispatch(getTopBannerAction());
  },[dispatch]);
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={changeBgImage}
          >
            {
              recommend.topBanners.map((item,index)=>{
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" 
                         src={item.imageUrl} 
                         alt={item.Typetitle}
                    />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left"
                  onClick={e=>bannerRef.current.prev()}
          ></button>
          <button className="btn right"
                  onClick={e=>bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

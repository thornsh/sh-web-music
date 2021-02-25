import React, { memo } from 'react'

import { Content, RecommendLeft, RecommendRight, RecommendWrapper } from './style'

import SHTopBanner from './c-cpns/top-banner'
import SHHotRecommend from './c-cpns/hot-recommend'

export default memo(function SHRecommend() {
  

  return (
    <RecommendWrapper>
      <SHTopBanner></SHTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <SHHotRecommend></SHHotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

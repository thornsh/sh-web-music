import React, { memo } from 'react'

import { RecommendWrapper } from './style'

import SHTopBanner from './c-cpns/top-banner'

export default memo(function SHRecommend() {
  

  return (
    <RecommendWrapper>
      <SHTopBanner></SHTopBanner>
    </RecommendWrapper>
  )
})

import React, { memo } from 'react'

import { HotRecommendWrapper } from './style'
import SHThemeHeaderRcm from '@/components/theme-header-rcm'

export default memo(function SHHotRecommend() {
  return (
    <HotRecommendWrapper>
      <SHThemeHeaderRcm title="热门音乐"
                        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}

      />
    </HotRecommendWrapper>
  )
})

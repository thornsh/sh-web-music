import SHDiscover from '@/pages/discover';
import SHFriend from '@/pages/friend';
import SHMine from '@/pages/mine';
import SHRecommend from '@/pages/discover/c-pages/recommend'
import SHRanking from '@/pages/discover/c-pages/ranking'
import SHSongs from '@/pages/discover/c-pages/songs'
import SHDjradio from '@/pages/discover/c-pages/djradio'
import SHArtist from '@/pages/discover/c-pages/artist'
import SHAlbum from '@/pages/discover/c-pages/album'
import { Redirect } from 'react-router';

const routes = [
  {
    path:"/",
    exact:true,
    render:()=>(
      <Redirect to="/discover" />
    )
  },
  {
    path:"/discover",
    component:SHDiscover,
    routes:[
      {
        path:"/discover",
        exact:true,
        render:()=>(
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: SHRecommend
      },
      {
        path: "/discover/ranking",
        component: SHRanking
      },
      {
        path: "/discover/songs",
        component: SHSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: SHDjradio
      },
      {
        path: "/discover/artist",
        component: SHArtist
      },
      {
        path: "/discover/album",
        component: SHAlbum
      },
    ]
  },
  {
    path:"/mine",
    component:SHMine
  },
  {
    path:"/friend",
    component:SHFriend
  }
];

export default routes;
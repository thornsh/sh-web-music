import SHDiscover from '@/pages/discover';
import SHFriend from '@/pages/friend';
import SHMine from '@/pages/mine';
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
    component:SHDiscover
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
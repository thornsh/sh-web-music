import SHDiscover from '@/pages/discover';
import SHFriend from '@/pages/friend';
import SHMine from '@/pages/mine';

const routes = [
  {
    path:"/",
    exact:true,
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
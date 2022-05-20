import { Outlet } from 'react-router';
import Header from '~/components/Header';
import SideBar from '~/components/SideBarContainer';
import Main from '~/components/UI/Main/Main';

export default function Index() {
  return (
    <div className="h-full w-full mx-auto">
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

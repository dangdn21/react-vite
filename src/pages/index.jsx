import { Outlet } from 'react-router';
import SideBar from '~/components/SideBarContainer/SideBarContainer';
import Main from '~/components/UI/Main/Main';

export default function () {
  return (
    <div className="h-full w-full mx-auto">
      <SideBar />

      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

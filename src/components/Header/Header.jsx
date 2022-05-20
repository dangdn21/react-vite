import Logo from '~/assets/images/POSLogo.png';
import NotificationIcon from '~/assets/icons/notification.svg';

const Header = () => {
  return (
    <div className="navbar bg-base-100 max-h-[60px] min-h-0  border-b border-color-[#ECEEF1]">
      <div className="flex-1">
        <a href="/" className="cursor-pointer normal-case text-xl">
          <img alt="logo" src={Logo} />
        </a>
      </div>
      <div className="flex-none">
        <button type="button" className="btn btn-ghost btn-circle mr-6">
          <div className="indicator">
            <img src={NotificationIcon} className="max-w-[40px]" alt="notification" />
            <span className="badge badge-success badge-primary indicator-item" />
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar mr-3">
            <div className="w-10 h-10 rounded-full max-w-[40px]">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

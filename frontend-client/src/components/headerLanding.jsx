import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { PiBasketFill } from "react-icons/pi";
import { IconContext } from "react-icons";

export default function HeaderLanding() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav className="top-0 sticky z-10 drop-shadow-md">
      <div
        id="header"
        className="px-20 py-6 flex justify-between items-center bg-emerald-700 text-neutral-100"
      >
        <HashLink to="/#" id="logo" className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="#f87171"
          >
            <path d="M20 16.78c.002-1.8.003-2.812 0-4.027-.001-.417.284-.638.567-.638.246 0 .49.168.538.52.19 1.412.411 2.816.547 3.146.042.099.113.141.185.141.123 0 .244-.123.206-.284-.255-1.069-.493-2.519-.607-3.334 1.904 1.854 2.314 2.005 2.192 3.548-.089 1.129-.52 2.508.373 4.255l-2.563.893c-.062-.314-.138-.637-.226-.933-.515-1.721-1.214-1.752-1.212-3.287zm-16.567-4.665c-.246 0-.49.168-.538.52-.19 1.412-.411 2.816-.547 3.146-.042.099-.113.141-.185.141-.123 0-.244-.123-.206-.284.255-1.069.493-2.519.607-3.334-1.904 1.854-2.314 2.005-2.192 3.548.09 1.128.521 2.507-.372 4.254l2.562.894c.062-.314.138-.637.226-.933.515-1.721 1.214-1.752 1.212-3.287-.002-1.8-.003-2.812 0-4.027.001-.418-.285-.638-.567-.638zm1.567.642zm14.001 2.637c-2.354.194-4.35.62-6.001 1.245v-9.876l.057-.036c1.311-.816 3.343-1.361 5.943-1.603v7.633c-.002-.459.165-.881.469-1.186.377-.378.947-.562 1.531-.391v-8.18c-3.438.105-6.796.658-9 2.03-2.204-1.372-5.562-1.925-9-2.03v8.18c.583-.17 1.153.012 1.531.391.304.305.471.726.469 1.184v-7.631c2.6.242 4.632.788 5.943 1.604l.057.035v9.876c-1.651-.626-3.645-1.052-6-1.246v1.385c0 .234-.021.431-.046.622 2.249.193 4.372.615 6.046 1.381.638.292 1.362.291 2 0 1.675-.766 3.798-1.188 6.046-1.381-.025-.191-.046-.386-.046-.621l.001-1.385zm-12.001-2.426c1.088.299 2.122.64 3 .968v1.064c-.823-.345-1.879-.705-3-1.015v-1.017zm0-1.014c1.121.31 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968v1.017zm0-5.09v1.017c1.121.311 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968zm0 3.058c1.121.31 2.177.67 3 1.015v-1.063c-.878-.328-1.912-.669-3-.968v1.016zm10 4.063c-1.121.31-2.177.67-3 1.015v-1.064c.878-.328 1.912-.669 3-.968v1.017zm0-3.048c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017zm-3-3.105v1.064c.823-.345 1.879-.705 3-1.015v-1.017c-1.088.299-2.122.64-3 .968zm3 1.074c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017z" />
          </svg>
          <h1 className="tracking-wide text-xl">
            <span className="text-red-400">T</span>he{" "}
            <span className="text-red-400">O</span>nline{" "}
            <span className="text-red-400">B</span>ookstore
          </h1>
        </HashLink>
        {!user ? (
          <ul className="flex items-center gap-6 relative">
            <li>
              <NavLink to="/account/Login" className="hover:text-red-200">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/account/Signup" className="hover:text-red-200">
                Register
              </NavLink>
            </li>
            <NavLink to="/basket">
              <li>
                <IconContext.Provider
                  value={{ className: "text-2xl hover:text-red-200" }}
                >
                  <PiBasketFill />
                </IconContext.Provider>
              </li>
              <div className="flex justify-center items-center py-1 px-2 -top-2 -right-4 h-6 absolute text-sm bg-red-500 rounded-full">
                2
              </div>
            </NavLink>
          </ul>
        ) : (
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <h3 className="text-xl">{user.username}</h3>
              <button
                onClick={handleClick}
                className="text-sm opacity-75 hover:text-red-200"
              >
                (Logout)
              </button>
            </div>
            <div>
              <NavLink
                to="/admin/AdminDashboard"
                className="hover:text-red-200"
              >
                Admin Dashboard
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <div
        id="sub-header"
        className="flex justify-center items-center p-4 bg-emerald-900 text-lg text-neutral-100"
      >
        <ul className="flex gap-8 drop-shadow-lg">
          <li>
            <HashLink to="/#botm" className="hover:text-red-200">
              Book of the Month
            </HashLink>
          </li>
          <li>
            <HashLink to="/#deals" className="hover:text-red-200">
              Deals
            </HashLink>
          </li>
          <li>
            <HashLink to="/#high-rating" className="hover:text-red-200">
              Highest Rated
            </HashLink>
          </li>
          <li>
            <HashLink to="/#new-arrivals" className="hover:text-red-200">
              New Arrivals
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

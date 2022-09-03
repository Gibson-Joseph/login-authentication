import Welcome from "../Welcome";
import Secure from "../Secure";
import route from "../router/route";
import {
  Route,
  Routes,
  NavLink,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../store/actions/Login.action";
import requireAuth from "../hoc/Hoc";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  const state = useSelector((state: any) => state.login);
  const dispatch = useDispatch();
  const location = useLocation();

  const logOut = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <div className=" m-auto w-96 text-center">
      <h1>parent Component</h1>

      <NavLink style={{ marginRight: "10px" }} to="/welcome">
        <button
          className={`bg-green-500 border-4 border-gray-400 rounded-xl e px-4 py-1 ${
            location.pathname === "/welcome" && "border-b-rose-600"
          }`}
        >
          Welcome
        </button>
      </NavLink>
      <NavLink to="/secure">
        <button
          className={`bg-green-500 ml-2 border-4 border-gray-400 px-4 py-1 rounded-xl ${
            location.pathname === "/secure" && "border-b-rose-600"
          }`}
        >
          Secure
        </button>
      </NavLink>
      <button
        className="hover:bg-red-700 bg-red-500 ml-2 border rounded-lg e px-4 py-1"
        onClick={() => logOut()}
      >
        Log Out
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default requireAuth(Layout);

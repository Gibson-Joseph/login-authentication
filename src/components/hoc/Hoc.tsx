import { access } from "fs";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const requireAuth: any = (ComposedComponent: any, path: any) => {
  const Authenticate = (props: any) => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = useSelector((state: any) => state.login);
    console.log(state.isAuth);

    useEffect(() => {
      if (state.isAuth) {
        navigate(location.pathname);
      } else {
        navigate("/login");
      }
    }, []);

    return <div>{state.isAuth && <ComposedComponent {...props} />}</div>;
  };
  return Authenticate;
};
export default requireAuth;

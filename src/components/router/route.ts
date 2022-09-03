import React from "react";

const Welcome = React.lazy(() => import("../Welcome"));

const Secure = React.lazy(() => import("../Secure"));

const route = [
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/Secure",
    Component: Secure,
  },
];

export default route;

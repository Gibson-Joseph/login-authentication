import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Layout from "./components/container/Layout";
import route from "./components/router/route";

const routMap = route.map(({ path, Component }, key) => (
  <Route path={path} element={<Component />} key={key} />
));

function App() {
  return (
    <div className="h-screen bg-gray-400">
      <Suspense fallback={"..."}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routMap}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl">Page not found...👎</h1>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import Login from "./container/Login";
import { RoutePath } from "./routes";

const App: FC = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.NOT_FOUND} element={<Home />} />
    </Routes>
  );
};

export default App;

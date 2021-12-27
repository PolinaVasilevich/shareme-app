import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import { routes } from "../routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;

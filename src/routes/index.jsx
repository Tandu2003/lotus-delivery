import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const routes = [
    { path: "/", component: Home },
    { path: "*", component: NotFound },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;

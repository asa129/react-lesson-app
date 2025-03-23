import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}>
        {HomeRoutes.map((props) => (
          <Route key={props.path} path={props.path} element={props.children} />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

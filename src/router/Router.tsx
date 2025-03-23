import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/Page404";

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

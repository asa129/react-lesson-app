import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
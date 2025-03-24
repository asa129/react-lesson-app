import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "teal",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        alignItems: "center",
      }}
    ></div>
  );
});

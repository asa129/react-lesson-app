import { FC, memo } from "react";
import { Link } from "react-router-dom";

export const Page404: FC = memo(() => {
  return (
    <>
      <p>存在しないURLだよ</p>
      <Link to="/">ログインへ</Link>
    </>
  );
});

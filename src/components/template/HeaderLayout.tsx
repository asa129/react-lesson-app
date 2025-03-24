import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "50px", // ヘッダーの高さと同じ値
        }}
      >
        {children}
      </div>
    </>
  );
});

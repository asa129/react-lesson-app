import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";
import { Box } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Box pt={50}>{children}</Box>
    </>
  );
});

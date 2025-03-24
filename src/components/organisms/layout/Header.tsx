import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MenuIconButton } from "../../atomes/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/home");
  };
  const onClickUser = () => {
    navigate("/home/user_management");
  };
  const onClickSetting = () => {
    navigate("/home/setting");
  };
  return (
    <>
      <Box position="fixed" top="0" left="0" width="100%">
        <Flex
          as="nav"
          bg="teal.500"
          color="white"
          align="center"
          justify="space-between"
          padding={{ base: 3, md: 5 }}
        >
          <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
            <Heading
              onClick={onClickHome}
              as="h1"
              fontSize={{ base: "md", md: "lg" }}
            >
              ユーザー管理アプリ
            </Heading>
          </Flex>
          <Flex
            align="center"
            fontSize="sm"
            flexGrow={2}
            display={{ base: "none", md: "flex" }}
          >
            <Box pr={4} pl={4}>
              <Link onClick={onClickUser}>ユーザー管理一覧</Link>
            </Box>
            <Link onClick={onClickSetting}>設定</Link>
          </Flex>
          <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
});

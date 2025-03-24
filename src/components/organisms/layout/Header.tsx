import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo } from "react";
import { HumbergerButton } from "../../atomes/HumbergerButton";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
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
              <Link>ユーザー一覧</Link>
            </Box>
            <Link>設定</Link>
          </Flex>
          <HumbergerButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
      </Box>
    </>
  );
});

import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return (
    <>
      <Box position="fixed" top="0" left="0" width="100%">
        <Flex
          as="nav"
          bg="teal.500"
          color="gray.500"
          align="center"
          justify="space-between"
          padding={{ base: 3, md: 5 }}
        >
          <Heading color="white" as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
      </Box>
    </>
  );
});

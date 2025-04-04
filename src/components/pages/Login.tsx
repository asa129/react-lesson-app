import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { PrimaryButton } from "../atomes/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const { login, loading } = useAuth();
  const onClickLogin = () => {
    login(userId);
  };
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザー管理一覧
          </Heading>
          <Divider my={4} />
          <Stack spacing={4} py={4} px={10}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChangeUserId}
            />
            <PrimaryButton
              isDisabled={userId === ""}
              isLoading={loading}
              onClick={onClickLogin}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});

import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  nickName: string;
  name: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { nickName, name, onClick, id } = props;
  return (
    <>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        boxShadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src="https://picsum.photos/800"
            alt="プロフィール"
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {nickName}
          </Text>
          <Text fontSize="sm" color="gray">
            {name}
          </Text>
        </Stack>
      </Box>
    </>
  );
});

import { Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { allUsers, users } = useAllUsers();
  useEffect(() => allUsers(), []);
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        {users?.map((user) => (
          <WrapItem>
            <UserCard nickName={user.username} name={user.name} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
});

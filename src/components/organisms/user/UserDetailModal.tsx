import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Input,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { User } from "../../../types/api/User";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedUser: User | null | undefined;
  disabledFlag: boolean;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, selectedUser, disabledFlag } = props;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input
                    value={selectedUser?.username}
                    isReadOnly
                    isDisabled={disabledFlag}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input
                    value={selectedUser?.name}
                    isReadOnly
                    isDisabled={disabledFlag}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input
                    value={selectedUser?.email}
                    isReadOnly
                    isDisabled={disabledFlag}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input
                    value={selectedUser?.phone}
                    isReadOnly
                    isDisabled={disabledFlag}
                  />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </ModalContent>
      </Modal>
    </>
  );
});

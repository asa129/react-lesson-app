import { FC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
  } = props;
  return (
    <>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button onClick={onClickHome} w="100%">
                TOP
              </Button>
              <Button onClick={onClickUserManagement} w="100%">
                ユーザー管理一覧
              </Button>
              <Button onClick={onClickSetting} w="100%">
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});

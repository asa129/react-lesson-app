import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, isLoading = false, isDisabled = false, onClick } = props;
  return (
    <>
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        isDisabled={isDisabled}
        isLoading={isLoading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
});

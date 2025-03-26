import { useToast } from "@chakra-ui/react"
import { useCallback } from "react";

type Props = {
  title: string;
  status: 'success' | 'error' | 'warning' | 'info';
}

export const useMessage = () => {
  const toast = useToast();
  const displayMessage = useCallback((props: Props) => {
    const { title, status } = props;
    toast({
    position: "top",
    title: title,
    status: status,
    duration: 2000,
    isClosable: true,
  });}, [toast]);
  return {displayMessage};
}
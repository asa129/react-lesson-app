import { useToast } from "@chakra-ui/react"

type Props = {
  title: string;
  status: 'success' | 'error' | 'warning' | 'info';
}

export const useMessage = () => {
  const toast = useToast();

  const displayMessage = (props: Props) => {
    const { title, status } = props;
    toast({
    title: title,
    status: status,
    duration: 2000,
    isClosable: true,
  });}
  return {displayMessage};
}
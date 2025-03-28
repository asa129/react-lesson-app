import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user"
import { useMessage } from "./useMessage";



export const useAllUsers = () => {
  const [ loading, setLoading ] = useState(false);
  const [ users, setUsers ] = useState<Array<User>>([]);
  const { displayMessage } = useMessage();

  const allUsers = useCallback(() => {
    setLoading(true);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users/").then(
      (res) => {
        setUsers(res.data);
      }
    ).catch(() => displayMessage({title: "ユーザー取得エラーです", status: "error"})).finally(() => setLoading(false));
  }, []);
  return {allUsers, users, loading};
}
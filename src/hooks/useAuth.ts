import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const { displayMessage } = useMessage();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => {
        if (res !== null) {
          navigate("/home");
          displayMessage({title: "ログイン成功" , status: "success"})
        } else{
          alert('ユーザーが見つかりません');
          displayMessage({title: "ユーザーが見つかりません" , status: "error"})
        }
      }
    ).catch(() => displayMessage({title: "ログインできません" , status: "error"})).finally(() => setLoading(false));
  }, [navigate, displayMessage]);
  return {login, loading}
}
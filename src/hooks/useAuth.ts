import { useCallback, useState } from "react"
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";
import { User } from "../types/api/User";

export const useAuth = () => {
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const { displayMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => {
        if (res !== null) {
          const isAdimn = res.data.id === 10 ? true : false;
          setLoginUser({...res.data, isAdimn});
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
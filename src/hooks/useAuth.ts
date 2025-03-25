import { useCallback, useState } from "react"
import axios from "axios";
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [ loading, setLoading ] = useState(false);
  const navigate = useNavigate();
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => {
        if (res !== null) {
          navigate("/home");
        } else{
          alert('ユーザーが見つかりません');
        }
      }
    ).catch(() => alert("ログインできません")).finally(() => setLoading(false));
  }, [navigate]);
  return {login, loading}
}
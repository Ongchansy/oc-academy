// hooks/useAuth.js
import { useMutation, useQuery } from "react-query";
import { loginUser, reqProfileApi } from "./request";


const useAuth = () => {

  const { data, isLoading, error } = useQuery(
    "profile",
    async () => {
      const response = await reqProfileApi();
      return response.data;
    },
    {
      refetchInterval: 2000,
    }
  );

  const Login = () => {
    return useMutation(loginUser)
  }

  
  return {
    data,
    isLoading,
    error,
    Login
  };
};

export default useAuth;

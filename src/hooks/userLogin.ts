import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise, AxiosResponse } from "axios";

const API_PATH = "http://localhost:3000/api/login";

const login = async (data: { email: string; password: string }) => {
  const x = await axios.post(API_PATH, data);
  console.log("x", x);
  return x;
};

export const useLoginMutate = () => {
  let access_token: string = "";

  const mutate = useMutation({
    mutationFn: login,
    mutationKey: ["login-request"],
    retry: false,
    onSuccess: (response) => {
      access_token = response.data.access_token;
    },
  });

  return { ...mutate, access_token };
};

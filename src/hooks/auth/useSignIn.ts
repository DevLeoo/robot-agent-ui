import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { User } from "./useUser";
import { ResponseError } from "@/utils/Error/responseError";
import { QUERY_KEY } from "@/utils/constants";
import Swal from "sweetalert2";

async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return {} as any;
  const response = await fetch("http://localhost:3000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok)
    throw new ResponseError("Failed on sign in request", response);

  return await response.json();
}

type IUseSignIn = UseMutateFunction<
  User,
  unknown,
  {
    email: string;
    password: string;
  },
  unknown
>;

export function useSignIn(): IUseSignIn {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation<
    User,
    unknown,
    { email: string; password: string },
    unknown
  >({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/");
    },
    onError: (error) => {
      console.log(error, "ERROR MESSAGE");
      Swal.fire({
        icon: "error",
        title: "Opps",
        text: "Erro ao autenticar. Verifique seu usuário e senha",
      });
    },
  });

  return signInMutation;
}

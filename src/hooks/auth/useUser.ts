import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { QUERY_KEY } from "@/utils/constants";
import { ResponseError } from "@/utils/Error/responseError";
import * as userLocalStorage from "../../utils/user-localstorage";

async function getUser(user: User | null | undefined): Promise<User | null> {
  if (!user) return null;
  const response = await fetch(`/api/users/${user.user.id}`, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  if (!response.ok)
    throw new ResponseError("Failed on get user request", response);

  return await response.json();
}

export interface User {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}

interface IUseUser {
  user: User | null;
}

export function useUser(): IUseUser {
  const { data: user } = useQuery<User | null>({
    queryFn: getUser,
    queryKey: [QUERY_KEY.user],
    initialData: userLocalStorage.getUser,
    error: () => {
      userLocalStorage.removeUser();
    },
  } as never);

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}

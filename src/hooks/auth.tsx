import React, { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthenticatedUser } from "../utils/getStorage";
import { parseJwt } from "../utils/jwtDecode";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
  jwt: AuthenticatedUser;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@cognitiveagent:logged");

    return !!isLogged;
  });

  const [jwt, setJwt] = useState<string>("");

  // const getLogin = async (email: string, password: string) => {
  //   const axiosInstance = new AxiosConfig();
  //   try {
  //     return await axiosInstance.post("login", { email, password });
  //   } catch (err: any) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text:
  //         err.response.data.errors.message ||
  //         err.response.data.errors.message[0],
  //     });
  //   }
  // };

  const signIn = async (email: string, password: string) => {
    // const loginResponse = await getLogin(email, password);
    // const access_token = loginResponse.data.access_token ?? undefined;

    // if (access_token) {
    //   setJwt(parseJwt(access_token));
    //   localStorage.setItem(
    //     "@cognitiveagent:logged",
    //     JSON.stringify({
    //       logged: true,
    //       access_token,
    //     })
    //   );

    localStorage.setItem(
      "@cognitiveagent:logged",
      JSON.stringify({
        logged: true,
        access_token: "",
      })
    );

    setLogged(true);
    //}
  };

  const signOut = () => {
    localStorage.removeItem("@cognitiveagent:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut, jwt }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

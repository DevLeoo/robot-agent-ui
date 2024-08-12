import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import industryImg from "@/assets/signin.svg";
import { useState } from "react";
import { useSignIn } from "@/hooks/auth/useSignIn";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = useSignIn();

  const submitForm = (email: string, password: string) => {
    if (email && password) signIn({ email, password });
  };

  return (
    <main className="h-screen flex w-full">
      <div className="transition-all duration-500 ease-in-out bg-secondary-foreground w-full sd:fw-full md:w-[50%] h-full flex p-16 justify-center rounded-r-[40%]">
        <img src={industryImg} alt="" />
      </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com a sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha para entrar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="exemplo@email.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="sua senha secreta"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button
              className="mt-6 w-full"
              onClick={() => submitForm(email, password)}
            >
              Entrar
            </Button>
            <Separator className="mt-5" />
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">
              Ao entrar em nossa plataforma você concorda com nossos Termos de
              Uso e Política de Privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
};

export default SignIn;

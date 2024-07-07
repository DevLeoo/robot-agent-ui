import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { SendHorizonalIcon } from "lucide-react";

const Chats = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle className="text-3xl">Chat AI</CardTitle>
          <CardDescription>
            Por aqui você consegue interagir com o seu bot
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] w-full pr-4">
            <div className="flex gap-3 text-slate-600 text-sm mb-">
              <Avatar>
                <AvatarFallback>Você</AvatarFallback>
                <AvatarImage src="https://github.com/DevLeoo.png" />
              </Avatar>
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">Humano:</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="flex gap-3 text-slate-600 text-sm">
              <Avatar>
                <AvatarFallback>IA</AvatarFallback>
                <AvatarImage src="https://github.com/rocketseat.png" />
              </Avatar>
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">Humano:</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. lectronic typesetting, remaining essentially
                unchanged. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.lectronic typesetting, remaining
                essentially unchanged. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.ng industry.lectronic
                typesetting, remaining essentially unchanged. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.ng
                industry.lectronic typesetting, remaining essentially unchanged.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <form className="w-full flex gap-2">
            <Input placeholder="Como posso te ajudar hoje?" />
            <Button type="submit" className="bg-slate-800 rounded-full">
              <SendHorizonalIcon />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Chats;

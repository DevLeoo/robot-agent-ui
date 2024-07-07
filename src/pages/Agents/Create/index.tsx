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
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelpIcon } from "lucide-react";
import React, { useState } from "react";

const createAgent = () => {
  console.log("a criar agente...");
};

const CreateAgent: React.FC = () => {
  const [agentName, setAgentName] = useState("");
  const [rangeValue, setRangeValue] = useState(5);

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[500px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle className="text-3xl">Crie seu agente</CardTitle>
          <CardDescription>Informações do seu agente</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-around items-center">
          <div className="w-full space-y-4">
            <div className="space-y-2">
              <Label>Nome do seu agente</Label>
              <Input
                type="text"
                placeholder="nome do seu novo agente"
                required
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex flex-row gap-2">
                      Temperatura de resposta do agente{" "}
                      <CircleHelpIcon size={15} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      O quão preciso e quão espontâneo seu agente será de acordo
                      com as regras que você definir (mais quente = mais
                      espontâneo)
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Input
                type="range"
                required
                value={rangeValue}
                max={10}
                onChange={(e) => setRangeValue(+e.target.value)}
              />
            </div>
          </div>
          <div className="w-full space-y-2">
            <Label>Orientacoes</Label>
            <Textarea placeholder="Traga um contexto sobre a acao que você quer que o agente execute" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full hover:bg-primary/60" onClick={createAgent}>
            Criar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateAgent;

import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "react-router-dom";

const createAgent = () => {
  console.log("a configurar agente...");
};

const Configuration: React.FC = () => {
  const [rangeValue, setRangeValue] = useState(5);
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle className="text-3xl">
            Configure seu agente - {id}
          </CardTitle>
          <CardDescription>
            Aqui você encontra configurações avançadas do seu agente para que
            ele opere ainda melhor
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center">
          <div className="w-full space-y-2">
            <div className="space-y-2">
              <Label>Text extract model</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="textract">textract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Embedding Model</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-minilm-l6-v2">
                    all-MiniLm-L6-v2
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Vector Store</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="faiss">FAISS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>LLM</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="faiss">
                    ChatOpenAI_gpt-3.5-turbo
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Max Token Limit</Label>
              <Input
                className="max-w-40"
                type="range"
                required
                value={rangeValue}
                max={10}
                onChange={(e) => setRangeValue(+e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Memory</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conversationbuffermemory">
                    ConversationBufferMemory
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
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

export default Configuration;

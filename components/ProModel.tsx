"use client";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { useProModalStore } from "@/hooks/use-pro-modal";
import { Button } from "./ui/button";
import { useState } from "react";

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    backgroundColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    backgroundColor: "bg-pink-700/10",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-emerald-500",
    backgroundColor: "bg-green-500/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    backgroundColor: "bg-orange-700/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    backgroundColor: "bg-green-700/10",
  },
];

const ProModel = () => {
  const proModal = useProModalStore();
  const [loading , setLoading] = useState(false)
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    }finally{
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex  justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Smart AI
              <Badge variant="premium" className="uppercase text-sm py-1">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div
                    className={cn("p-2 w-fit rounded-md", tool.backgroundColor)}
                  >
                    <tool.icon className={cn("h-6 w-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm md:text-md">
                    {tool.label}
                  </div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button  disabled={loading} variant="premium" className="w-full" size="lg" onClick={onSubscribe}>
            Upgrade
            <Zap className="fill-white w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModel;

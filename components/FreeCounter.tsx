"use client";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModalStore } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

const FreeCounter = ({ apiLimitCount = 0 , isPro= false}: FreeCounterProps) => {
  const proModal = useProModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if(isPro) {
    return null
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-white text-sm mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              className="h-3"
            />
          </div>
          <Button variant="premium" className="w-full" onClick={proModal.onOpen}>
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;

"use client";

import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 ">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <h1 className="leading-[1.3]">The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400 mt-3">
          Create content using AI 10x faster.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="premium"
              className="p-4 md:text-lg md:p-6 rounded-full font-semibold mt-3"
            >
              Start Generating for free
            </Button>
          </Link>
        </div>
        <div className="text-xs md:text-sm font-normal text-zinc-400 mt-3">
          No credit card required.
        </div>
      </div>
    </div>
  );
};

export default LandingHero;

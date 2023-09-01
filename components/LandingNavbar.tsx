'use client'
import Image from "next/image";
import Link from "next/link";

import {useAuth } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  
  return (
    <nav className="bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center gap-x-3 ">
        <div className="relative h-8 w-8">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", poppins.className)}>
          Smart AI
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;

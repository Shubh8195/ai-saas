import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#111827] h-full w-full">
      <main
        className={cn(
          "landing-container container mx-auto h-full bg-[#111827] overflow-auto p-4",
          poppins.className
        )}
      >
        <div className="max-w-screen-2xl h-full">{children}</div>
      </main>
    </div>
  );
};

export default LandingLayout;

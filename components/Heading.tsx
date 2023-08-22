import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex gap-x-3 items-center mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-8 h-8", iconColor)} />
      </div>
      <div>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

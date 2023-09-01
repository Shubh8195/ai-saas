"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Shubham Singh",
    avatar: "SS",
    title: "SDE-1",
    description:
      "We've seen a significant reduction in errors and increased customer satisfaction.",
  },
  {
    name: "Suraj Kumar",
    avatar: "SK",
    title: "SDE-2",
    description:
      "It simplifies complex tasks and delivers outstanding outcomes.",
  },
  {
    name: "Mohit Negi",
    avatar: "MN",
    title: "Android Developer",
    description:
      "Incredible AI innovation, it's like having a genius assistant at your fingertips.",
  },
  {
    name: "Jafin Jahfar",
    avatar: "JJ",
    title: "FullStack Developer",
    description:
      "Using this AI app, I achieved impressive results in a fraction of the time",
  },
];
const LandingContent = () => {
  return (
    <div className="pb-20">
      <h2 className="text-center font-extrabold text-4xl text-white mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarFallback className="bg-zinc-500 text-sm">
                    {item.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;

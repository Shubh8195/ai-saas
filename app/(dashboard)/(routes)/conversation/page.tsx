"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { CreateChatCompletionRequestMessage } from "../../../../node_modules/openai/src/resources/chat";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import { Heading } from "@/components/Heading";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/UserAvatar";
import { AiAvatar } from "@/components/AiAvatar";
import { useProModalStore } from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";

interface ChatRequestMessage {
  role: "user";
  content: string | null;
}

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatRequestMessage[]>([]);
  const proModal = useProModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("api/conversation", newMessages);

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403){
        proModal.onOpen();
      }else{
        toast.error("something went wrong")
      }
    } finally {
      router.refresh();
    }
  };
  return (
    <div className="mx-[1%]">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="w-full col-span-12 lg:col-span-2"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-8">
          {isLoading && (
            <div className="p-8 rounded-lg w-full h-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-6 w-full flex gap-x-4 items-start rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message?.role === "user" ? <UserAvatar /> : <AiAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;

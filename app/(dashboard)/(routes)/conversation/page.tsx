"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";

import { Heading } from "@/components/Heading";

import { formSchema } from "./constants";
import { Form } from "@/components/ui/form";

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div>
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

        </Form>
        </div>
      </div>
    </div>
  );
};

export default page;

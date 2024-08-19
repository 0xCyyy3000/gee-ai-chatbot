"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import React, { useRef, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Links } from "@/components/links";
import { Author } from "@/components/author";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  const chatParent = useRef<HTMLUListElement>(null);

  useEffect(() => {
    append({
      role: "assistant",
      content: "",
    }).then();
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }

    console.log(messages);
  }, [messages]);

  return (
    <main className="flex flex-col w-full h-screen max-h-dvh bg-background">
      <header className="py-4 mb-4 border-b w-full max-w-3xl mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold">Gee Chatbot</h1>
          <Author />
        </div>
        <div className="inline-flex items-center flex-row-reverse gap-4">
          <ThemeToggle />
          <Links />
        </div>
      </header>

      <section className="container px-0 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
        <ul
          ref={chatParent}
          className="h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4"
        >
          {messages.map((m, index) => (
            <>
              {m.role === "user" ? (
                <li key={index} className="flex flex-row">
                  <div className="rounded-xl p-4 bg-background shadow-md flex">
                    <p className="text-primary">
                      <strong>You: </strong>
                      {m.content}
                    </p>
                  </div>
                </li>
              ) : (
                m.content && (
                  <li key={index} className="flex flex-row-reverse">
                    <div className="rounded-xl p-4 bg-background shadow-md flex w-3/4">
                      <p>
                        <strong>Gee Chatbot: </strong>
                        {m.content}
                      </p>
                    </div>
                  </li>
                )
              )}
            </>
          ))}
        </ul>
      </section>

      <section className="p-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl mx-auto items-center"
        >
          <Input
            className="flex-1 min-h-[40px]"
            placeholder="Ask me a question"
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button className="ml-2" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}

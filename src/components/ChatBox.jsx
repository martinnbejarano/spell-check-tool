import { useState } from "react";
import { fixGrammar } from "../api/cohere";
import ClipLoader from "react-spinners/ClipLoader";
import { Message } from "./Message";

export const ChatBox = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "system",
      text: "Hi! Im a bot that will help you to correct grammar. You can write whatever you want, and I will help you to correct your grammar mistakes",
    },
  ]);

  const handleForm = async (e) => {
    e.preventDefault();
    if (text === "") return;
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);
    const response = await fixGrammar(text);
    setMessages((prev) => [
      ...prev,
      {
        role: "system",
        text: response,
      },
    ]);
    setIsLoading(false);
  };

  return (
    <section className="relative row-span-2 h-full w-full  max-w-[800px] rounded-t-3xl border-x border-t border-zinc-600 px-4 pt-8">
      <div className="relative flex w-full flex-col gap-4 overflow-y-scroll">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} role={message.role} />
        ))}
      </div>
      <form
        onSubmit={handleForm}
        className="absolute bottom-5 left-10 right-10 flex h-14 justify-between"
      >
        <textarea
          type="text"
          value={text}
          placeholder="Enter your text here"
          className="flex-grow resize-none rounded-xl bg-[#000d1b] p-3 outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className={`grid w-32 place-items-center rounded-xl transition hover:bg-blue-400 ${isLoading ? "bg-blue-900" : "bg-blue-500"}`}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader size={16} color="#fff" /> : "Submit"}
        </button>
      </form>
    </section>
  );
};

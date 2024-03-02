import { ChatBox } from "./components/ChatBox";

export default function App() {
  return (
    <div className="grid-rows-1fr grid h-screen place-items-center bg-primary text-white">
      <article className="flex flex-col items-center justify-center gap-8 px-8 text-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-300 bg-clip-text text-5xl font-bold text-transparent ">
          Spell-Checker
        </h1>
        <h6 className="text-base text-zinc-300">
          Fix spelling mistakes, confusing grammar, and more with our instant
          writing feedback.
        </h6>
      </article>
      <ChatBox />
    </div>
  );
}

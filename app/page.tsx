"use client";
import PdfExibe from "@/components/PdfExibe";

import { use, useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>(
    "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM "
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="bg-slate-400 border border-black rounded-lg"
      />
      <button onClick={() => setIsOpen(true)}>abrir pdf</button>
      {isOpen ? <PdfExibe text={text} /> : null}
    </main>
  );
}

"use client";

import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import TypingCode from "./typingCode";

const codeLines = [
  "npx nuxi@latest",
  "bun next build",
  "pnpm create vite",
  "go fmt *.go",
  "git pull -r",
  "nvm use stable",
  "tsc --init"
];

function AppendCode() {
  const { width } = useWindowSize();

  if (width >= 1440) {
    const code = codeLines[Math.floor(Math.random() * codeLines.length)];
    return (
      <span className="absolute -right-2.5 bottom-2 translate-x-full">
        <TypingCode code={code} />
      </span>
    );

    return null;
  }
}

function Navbar() {
  return (
    <section className="relative w-full sm:w-framed max-w-[1120px] mx-auto border-x border-slate-300 px-6 py-4 flex flex-row items-center justify-between">
      <Link className="font-display text-3xl font-bold text-slate-950" href="/">
        Prain Lopez
      </Link>
      <ul className="flex flex-row align-middle">
        <li className="mx-3 text-slate-950">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-3 text-slate-950">Blog</li>
        <li className="mx-3 text-slate-950">Guestbook</li>
      </ul>
      <AppendCode />
    </section>
  );
}

export default Navbar;

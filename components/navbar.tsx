"use client";

import Link from "next/link";
import { useWindowSize } from "usehooks-ts";
import TypingCode from "./typingCode";

const codeLines = [
  "npm create vite",
  "go fmt *.go",
  "git pull -r",
  "tsc --watch",
  "spring init",
];

function AppendCode() {
  const { width } = useWindowSize();

  if (width >= 1440) {
    const code = codeLines[Math.floor(Math.random() * codeLines.length)];
    return (
      <span className="absolute -right-2.5 bottom-2 translate-x-full text-slate-700">
        <TypingCode code={code} />
      </span>
    );

    return null;
  }
}

function Navbar() {
  return (
    <nav className="border-y border-slate-300">
      <section className="relative mx-auto flex w-full max-w-[1120px] flex-row items-center justify-between border-x border-slate-300 px-6 py-4 sm:w-framed">
        <Link
          className="font-display text-3xl font-medium text-slate-950"
          href="/"
        >
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
    </nav>
  );
}

export default Navbar;

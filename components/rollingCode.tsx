"use client";

import { useState } from "react";
import { useInterval } from "usehooks-ts";

const codes = [
  "JavaScript",
  "....Go....",
  "TypeScript",
  "...Java...",
  "...HTML..."
];

function* arrayLooper(arr: string[]) {
  let i = 0;
  while (true) {
    yield arr[i];
    i = (i + 1) % arr.length;
  }
}
const looper = arrayLooper(codes);

function RollingCode() {
  const [displayText, setDisplayText] = useState("HTML......");

  useInterval(async () => {
    for (let i = displayText.length - 1; i >= 0; i--) {
      await new Promise((resolve) => {
        setTimeout(resolve, 75);
      });
      setDisplayText(
        (prev) => prev.substring(0, i) + "." + prev.substring(i + 1)
      );
    }
    const newText = looper.next().value ?? "";
    for (let i = 0; i < displayText.length; i++) {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      setDisplayText(
        (prev) => prev.substring(0, i) + newText[i] + prev.substring(i + 1)
      );
    }
  }, 7500);

  return (
    <code className="mx-2 px-1 text-5xl font-mono font-medium text-slate-950 bg-slate-200/75">
      {displayText}
    </code>
  );
}

export default RollingCode;

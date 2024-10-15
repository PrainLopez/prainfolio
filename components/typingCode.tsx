"use client";

import { useRef, useState } from "react";
import { useInterval, useTimeout } from "usehooks-ts";

// Types
interface Props {
  code: string;
}

function TypingCode({ code }: Props) {
  const [displayCode, setDisplayCode] = useState("");
  const index = useRef(0);
  const running = useRef(false);

  useTimeout(() => {
    running.current = true;
  }, 2000);

  useInterval(
    () => {
      setDisplayCode(code.substring(0, index.current + 1));
      index.current++;
    },
    running && index.current < code.length ? 150 : null
  );

  return (
    <span>
      <code className="font-displayCode text-sm text-slate-700">
        {displayCode}
      </code>
      <code className="font-displayCode text-sm font-bold text-slate-700 animate-textBlink">
        _
      </code>
    </span>
  );
}

export default TypingCode;

import { useState } from "react";

// Types
interface Props {
  code: string;
}

function TypingCode({ code }: Props) {
  const [displayCode, setDisplayCode] = useState("");
  return (
    <>
      <code className="font-displayCode text-sm text-slate-700">
        {displayCode}
      </code>
      <code className="font-displayCode text-sm font-extrabold text-slate-700 animate-textBlink">
        _
      </code>
    </>
  );
}

export default TypingCode;

import { useState } from "react";

export default function ProgressBar() {
  const [input, setInput] = useState(0);
  return (
    <>
      <div>Progress Bar</div>
      <input
        type="number"
        value={input}
        placeholder="Enter your percent value"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="p-2 m-2 border border-gray-900 rounded-lg"
        max={100}
        min={0}
      />
      <div className="outer">
        <div className="inner" style={{"transform": `translateX(${input-100}%)`}}>{input}%</div>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-8 bg-gray-100 border border-gray-200 w-fit py-1 px-2 rounded-md ">
        <button onClick={decrement} className="text-gris text-sm">
          -
        </button>
        <p className="text-gris text-sm ">{count}</p>
        <button onClick={increment} className="text-gris text-sm">
          +
        </button>
      </div>
    </div>
  );
}

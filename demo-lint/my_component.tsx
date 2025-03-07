// @ts-types="@types/react"
import { useState } from "react";

export function MyComponent({ value }: { value: boolean }) {
  if (value) {
    const [state, _setState] = useState(0);
    return <span>{state}</span>;
  }
  const [state2, _setState2] = useState(0);
  return <span>{state2}</span>;
}

export function MyComponent2({ values }: { values: string[] }) {
  return (
    <div>
      <h1>List of values</h1>
      {values.map((val) => <span>The value is: {val}</span>)}
    </div>
  );
}

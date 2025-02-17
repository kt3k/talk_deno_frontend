// @ts-types="@types/react"
import { useState } from "react";

export function MyComponent({ value }) {
  if (value) {
    const [state, _setState] = useState();
    return state;
  }
  const [state, _setState] = useState();
  return state;
}

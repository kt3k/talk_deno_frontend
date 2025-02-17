// @ts-types="@types/react"
import { useState } from "react";

import { useCallback } from "./a.svg";

let a = useCallback;

export function MyComponent({ value }: { value: boolean }) {
  if (value) {
    const [state, _setState] = useState();
    return state;
  }
  return null;
}

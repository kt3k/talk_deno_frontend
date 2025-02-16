// @ts-types="@types/react"
import { useState } from "react";

function Component() {
  const [val, setVal] = useState(0);

  return <div>count {val}</div>;
}

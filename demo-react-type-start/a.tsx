
import { useState } from "npm:react@^19.0.0";

function Component() {
  const [val, setVal] = useState(0);
  return <div>count {val}</div>;
}

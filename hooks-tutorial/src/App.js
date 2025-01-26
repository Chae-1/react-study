import { useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Average />
    </div>
  );
}

export default App;

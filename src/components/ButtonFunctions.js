import { useState } from "react";

export function Expandable({ children }) {
  const [show, setShow] = useState(false);

  const toggleOpen = () => setShow((currOpen) => !currOpen);

  return (
    <div>
      <button className="button is-small is-responsive" onClick={toggleOpen}>
        {show ? "Hide" : "Show"}
      </button>
      {show && children}
    </div>
  );
}

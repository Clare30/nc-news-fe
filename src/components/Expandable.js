import { useState } from "react";

export default function Expandable({ children, classAssign }) {
  const [show, setShow] = useState(false);

  const toggleOpen = () => setShow((currOpen) => !currOpen);

  return (
    <div>
      <button className={classAssign} onClick={toggleOpen}>
        {show ? "Hide" : "Show"}
      </button>
      {show && children}
    </div>
  );
}

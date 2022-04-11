import { useState } from "react";

export default function Expandable({ children, classAssign, textOpen, textClose }) {
  const [show, setShow] = useState(false);

  const toggleOpen = () => setShow((currOpen) => !currOpen);

  return (
    <div>
      <button className={classAssign} onClick={toggleOpen}>
        {show ? textClose : textOpen}
      </button>
      {show && children}
    </div>
  );
}

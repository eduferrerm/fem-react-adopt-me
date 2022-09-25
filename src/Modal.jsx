import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  // creates reference for element, one value that is refered to as the exact thing across all renders, used to avoids memory leaks
  // elRef is a frozen object, type: mutable ref object, can only modify "current"

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
    // functions returned within effects, are scheduled to be used by react whenever this function gets removed from the dom
    // functionally equivalente de did unmount
    // destroys div when component unmounts
    // whatever you return in useEffect is for cleanups, almost always to avoid memory leaks
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

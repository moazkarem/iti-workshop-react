import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }) => {
  const elref = useRef(null);
  if (!elref.current) {
    elref.current = document.createElement("div");
  }
  useEffect(() => {
    const Modalcontent = document.getElementById("modal");
    Modalcontent.appendChild(elref.current);
    return ()=>{
        Modalcontent.removeChild(elref.current)
    }
  }, []); 
  return createPortal(children, elref.current);
};
export default Modal;

import { useRef, useEffect } from "react";

export default outsideClick => {
  const ref = useRef(null);
  useEffect(() => {
    const handleOutsideClick = e => {
      if (!ref.current) {
        return;
      }

      if (ref.current.contains(e.target)) {
        return;
      }

      outsideClick();
    };
    document.addEventListener("mousedown", handleOutsideClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, false);
    };
  }, [ref, outsideClick]);

  return ref;
};

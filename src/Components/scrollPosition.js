import { useLayoutEffect, useRef } from "react";

export const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = useRef(getScrollPosition({ useWindow }));
  let throttleTimeout = null;

  const callBack = () => {
    const currPosition = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currentPosition });
    position.current = currPosition;
    throttleTimeout = null;
  };
  //using useLayoutEffect bc runs synchronously with DOM with re-renders when updating state.
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
};

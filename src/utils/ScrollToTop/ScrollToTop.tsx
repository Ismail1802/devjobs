import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

type ScrollChildren = {
  children: ReactNode;
};

const ScrollToTop = ({ children }: ScrollChildren) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;

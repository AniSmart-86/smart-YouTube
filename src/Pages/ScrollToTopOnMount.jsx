import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // This function Only run when the pathname changes

  return null; // This component doesn't render anything
}

export default ScrollToTopOnMount;
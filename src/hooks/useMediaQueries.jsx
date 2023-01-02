// The hooks checks if current window size matches passed media querie, return true/false
import { useState, useEffect } from "react"

const useMediaQueries = (mediaQuery) => {
    const [currentMatches, setCurrentMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    if (media.matches !== currentMatches) {
      setCurrentMatches(media.matches);
    }
    const listener = () => setCurrentMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [currentMatches, mediaQuery]);

  return currentMatches;
}
export default useMediaQueries
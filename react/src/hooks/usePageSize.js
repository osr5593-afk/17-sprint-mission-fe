import { useEffect, useState } from "react";

function getPageSize(width, sizes) {
  if (width < 744) return sizes.mobile;
  if (width < 1200) return sizes.tablet;
  return sizes.desktop;
}

export default function usePageSize({ mobile, tablet, desktop }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return getPageSize(width, { mobile, tablet, desktop });
}

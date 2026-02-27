"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

/**
 * PageTransition
 * --------------
 * Wraps page content and applies a quick fade-up animation
 * whenever the route (pathname) changes. The animation is
 * CSS-driven so it is hardware-accelerated and has zero JS overhead.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [animationClass, setAnimationClass] = useState("page-enter");

  useEffect(() => {
    /* When pathname changes, briefly fade out, swap content, then fade in */
    setAnimationClass("page-exit");

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setAnimationClass("page-enter");
    }, 150); /* 150ms exit, then swap + enter */

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* On first render, just show children immediately with enter animation */
  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return <div className={animationClass}>{displayChildren}</div>;
}

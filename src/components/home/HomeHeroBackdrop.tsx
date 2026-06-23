"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./HomeHero.module.scss";

const BANNER = "/images/samx/SAM-BANNER.jpg";

export function HomeHeroBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;

    const update = (clientX: number, clientY: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${clientX}px`);
        root.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };

    const onMove = (event: MouseEvent) => update(event.clientX, event.clientY);
    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) update(touch.clientX, touch.clientY);
    };

    update(window.innerWidth / 2, window.innerHeight / 2);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(raf);
    };
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div ref={rootRef} className={styles.cursorBackground} aria-hidden>
        <div className={styles.backgroundBlur} style={{ backgroundImage: `url(${BANNER})` }} />
        <div className={styles.backgroundSharp} style={{ backgroundImage: `url(${BANNER})` }} />
        <div className={styles.cursorGlow} />
      </div>
      <div className={styles.overlay} aria-hidden />
    </>,
    document.body,
  );
}

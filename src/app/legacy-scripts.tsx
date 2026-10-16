"use client";

import Script from "next/script";
import { useState } from "react";

const LEGACY_SCRIPT_SOURCES: readonly string[] = [
  "/js/jquery.js",
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/js/owl.js",
  "/js/wow.js",
  "/js/appear.js",
  "/js/jquery.stellar.min.js",
  "/js/jquery.fancybox.js",
  "/js/mixitup.js",
  "/js/jquery.mCustomScrollbar.concat.min.js",
  "/js/swiper.min.js",
  "/js/TweenMax.min.js",
  "/js/script.js?v=2",
];

export function LegacyScripts() {
  const [nextScriptIndex, setNextScriptIndex] = useState<number>(0);
  const visibleScriptCount: number = Math.min(
    nextScriptIndex + 1,
    LEGACY_SCRIPT_SOURCES.length,
  );

  return (
    <>
      {LEGACY_SCRIPT_SOURCES.slice(0, visibleScriptCount).map(
        (source: string, index: number) => (
          <Script
            key={source}
            src={source}
            strategy="afterInteractive"
            onReady={
              index === nextScriptIndex
                ? () => setNextScriptIndex((currentIndex: number) => currentIndex + 1)
                : undefined
            }
            onError={
              index === nextScriptIndex
                ? () => {
                    throw new Error(`Failed to load legacy script: ${source}`);
                  }
                : undefined
            }
          />
        ),
      )}
    </>
  );
}

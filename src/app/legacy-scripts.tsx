"use client";

import Script from "next/script";
import { useState } from "react";
import { preload } from "react-dom";
import { LEGACY_SCRIPT_SOURCES } from "./legacy-script-sources";


export function LegacyScripts() {
  // Fetch every script in parallel; they still run one after another, in order.
  LEGACY_SCRIPT_SOURCES.forEach((source: string) => preload(source, { as: "script" }));

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

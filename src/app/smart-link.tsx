"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { REACT_ROUTES } from "./site-data";

type SmartLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  readonly href: string;
};

/**
 * Uses client-side navigation (with prefetching) between React pages, and a normal
 * link whenever a legacy HTML page is involved, because those pages need a full load
 * to start their scripts.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const pathname: string = usePathname();
  const target: string = href.split("#")[0].split("?")[0];
  const clientNavigation: boolean =
    href.startsWith("/") &&
    !href.includes("#") &&
    REACT_ROUTES.has(target) &&
    REACT_ROUTES.has(pathname);

  if (clientNavigation) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

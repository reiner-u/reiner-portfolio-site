"use client";

import posthog from "posthog-js";
import type { AnchorHTMLAttributes } from "react";

type DemoLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

// Appends the visitor's PostHog distinct_id at click time so the destination
// site (Weather App, BlockBlast, Noctus) can continue the same identity.
// Done on click rather than render because the page is statically exported,
// and posthog has no id until it initializes in the browser.
function decorate(anchor: HTMLAnchorElement, baseUrl: string) {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("distinct_id", posthog.get_distinct_id());
    anchor.href = url.toString();
  } catch {
    // Leave the plain href in place if anything goes wrong.
  }
}

export default function DemoLink({ href, children, ...rest }: DemoLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => decorate(e.currentTarget, href)}
      onAuxClick={(e) => decorate(e.currentTarget, href)}
    >
      {children}
    </a>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

interface NavMenuItem {
  label: string;
  href: string;
}

const navMenuItems: NavMenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
                Reiner Umila
            </Link>
        <div className="hidden gap-8 md:flex ml-auto">
            {navMenuItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground transition-colors hover:text-accent-blue"
                    >
                    {item.label}
                </Link>
            ))}
        </div>
        </div>
    </nav>
  );
}

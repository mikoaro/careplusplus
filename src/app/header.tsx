"use client";

// import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
// import { HeaderActions } from "./header-actions";
import Link from "next/link";
import Logo from "@/public/logo-icon.svg";

export function Header() {
  return (
    <div className="z-10 relative dark:bg-slate-900 bg-slate-50 py-2 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex items-center gap-4 text-2xl">
            <Image
              src={Logo}
              width={40}
              height={40}
              className="rounded"
              alt="an image of a brain"
            />
            CarePlusPlus
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/dashboard" className="hover:text-slate-300">
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/" className="flex items-center gap-4 text-2xl">
            Home
          </Link>
          {/* <ModeToggle />

          <HeaderActions /> */}
        </div>
      </div>
    </div>
  );
}

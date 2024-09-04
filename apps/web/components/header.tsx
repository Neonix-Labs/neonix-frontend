import Link from "next/link";
import { Suspense } from "react";
import { DesktopNav } from "./desktop-nav";
import { MobileButtonMenu, MobileNav } from "./mobile-nav";
import { UserMenu } from "./user-menu";

export function Header() {
  return (
    <div className="container mx-auto top-4 sticky z-50">
      <header className="mt-4 px-2 md:px-4 md:flex justify-center">
        <nav className="border border-border px-4 flex justify-between items-center gap-3 backdrop-filter backdrop-blur-xl bg-zinc-900 rounded-md bg-opacity-70 h-[50px] z-20">
          <Link href="/" prefetch={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="sr-only">Neonix Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <DesktopNav />

            {/* <Suspense fallback={<p>Loading...</p>}>
              <UserMenu />
            </Suspense> */}
          </div>

          <MobileButtonMenu />
        </nav>

        <MobileNav />
      </header>
    </div>
  );
}

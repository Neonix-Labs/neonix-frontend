import { Button } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import Link from "next/link";
import { MountainIcon } from "./mountain-icon";

export function Header() {
  return (
    <div className="p-4 container w-full mx-auto h-[72px] sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      <header>
        <nav className="border border-border px-4 flex items-center gap-3 backdrop-filter backdrop-blur-xl bg-[#121212] rounded-md bg-opacity-70 h-[50px] z-20">
          <Link href="/" prefetch={false}>
            <MountainIcon className="size-6" />
            <span className="sr-only">Neonix Labs</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none"
              >
                Products{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-3 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link href="/recap" prefetch={false}>
                <DropdownMenuItem>Recap</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about">
            <Button
              variant="outline"
              className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none"
            >
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none"
            >
              Contact
            </Button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

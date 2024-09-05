import { Button } from "@repo/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import Link from "next/link";

export function DesktopNav() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none rounded-none"
          >
            Products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
          className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none rounded-none"
        >
          About
        </Button>
      </Link>
      <Link href="/talk-to-us">
        <Button
          variant="outline"
          className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none rounded-none"
        >
          Talk to us
        </Button>
      </Link>
    </>
  );
}

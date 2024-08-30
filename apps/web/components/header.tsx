"use client";

import { Button } from "@repo/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/ui/collapse";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/dropdown-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MountainIcon } from "./mountain-icon";

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  return (
    <div className="container mx-auto">
      <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
        <nav className="border border-border px-4 flex justify-between items-center gap-3 backdrop-filter backdrop-blur-xl bg-[#121212] rounded-md bg-opacity-70 h-[50px] z-20">
          <Link href="/" prefetch={false}>
            <MountainIcon className="size-6" />
            <span className="sr-only">Neonix Labs</span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
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
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-3 ml-2"
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
          </div>

          <button
            type="button"
            className="ml-auto md:hidden p-2"
            onClick={() => handleToggleMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={13}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M0 12.195v-2.007h18v2.007H0Zm0-5.017V5.172h18v2.006H0Zm0-5.016V.155h18v2.007H0Z"
              />
            </svg>
          </button>
        </nav>

        {isOpen && (
          <motion.div
            className="fixed bg-background -top-[2px] right-0 left-0 bottom-0 h-screen z-10 px-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mt-4 flex justify-between p-3 px-4 relative ml-[1px]">
              <button type="button" onClick={handleToggleMenu}>
                <span className="sr-only">Neonix Labs</span>
                <MountainIcon />
              </button>

              <button
                type="button"
                className="ml-auto md:hidden p-2 absolute right-[10px] top-2"
                onClick={handleToggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="fill-primary"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              </button>
            </div>

            <div className="h-screen overflow-auto">
              <motion.ul
                initial="hidden"
                animate="show"
                className="px-2 pt-8 text-xl text-[#878787] space-y-5 mb-8 overflow-auto"
                variants={listVariant}
              >
                <Collapsible className="w-full">
                  <CollapsibleTrigger asChild>
                    <p className="h-8 items-center justify-between text-sm font-medium px-3 py-2 inline-flex text-secondary-foreground w-full transition-opacity hover:opacity-70 duration-200">
                      <span>Products</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-3 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </p>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <motion.li variants={itemVariant}>
                      <Link href="/recap" onClick={handleToggleMenu}>
                        <Button
                          variant="outline"
                          className="border-none !ring-0 outline-none h-12 px-6 focus-visible:outline-none"
                        >
                          Recap
                        </Button>
                      </Link>
                    </motion.li>
                  </CollapsibleContent>
                </Collapsible>

                <motion.li variants={itemVariant}>
                  <Link
                    href="/about"
                    onClick={handleToggleMenu}
                    className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
                  >
                    About
                  </Link>
                </motion.li>

                <motion.li variants={itemVariant}>
                  <Link
                    href="/contact"
                    onClick={handleToggleMenu}
                    className="h-8 items-center justify-center text-sm font-medium px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        )}
      </header>
    </div>
  );
}

import Link from "next/link";
import { SocialLinks } from "./socials";

export function Footer() {
  return (
    <footer className="px-4 md:px-6 pt-10 md:pt-16 mt-14 relative overflow-hidden md:max-h-[820px] mx-auto container">
      <div className="container">
        <div className="flex justify-between items-center pb-2 mb-12">
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="sr-only">Midday</span>
          </Link>

          <span className="font-normal md:text-2xl text-right">
            We create exceptional products that surprise and empower.
          </span>
        </div>

        <div className="flex justify-end pb-16">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

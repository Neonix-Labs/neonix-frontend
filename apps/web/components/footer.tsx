import Link from "next/link";
import { MountainIcon } from "./mountain-icon";
import { SocialLinks } from "./socials";

export function Footer() {
  return (
    <footer className="px-4 md:px-6 pt-10 md:pt-16 mt-14 relative overflow-hidden md:max-h-[820px] mx-auto container">
      <div className="container">
        <div className="flex justify-between items-center pb-2 mb-12">
          <Link href="/" className="scale-50 -ml-[52px] md:ml-0 md:scale-100">
            <MountainIcon className="size-8" />
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

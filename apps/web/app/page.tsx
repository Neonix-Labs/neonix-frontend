import { BulletPoints } from "@/components/bullet-points";
import { Button } from "@repo/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative md:min-h-[375px] container mx-auto">
        <div className="flex flex-col mt-[200px] px-4">
          <h1 className="text-6xl md:text-[90px] font-medium mt-6 leading-none">
            Neonix Labs
            <br />{" "}
            <span className="font-thin text-4xl md:text-[75px]">
              We create exceptional products that surprise and empower.
            </span>
          </h1>

          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border border-primary h-12 px-6"
                >
                  Talk to us
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="link" className="text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BulletPoints />
    </>
  );
}

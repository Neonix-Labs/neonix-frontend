import { Button } from "@repo/ui/button";
import Link from "next/link";

export function MissionStatememnt() {
  return (
    <section className="relative container mx-auto">
      <div className="relative bg-zinc-900 p-8 md:px-20 md:py-20 mt-20 rounded-lg flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl tracking-tight">
          Mission Statement
        </h2>
        <p className="text-zinc-500 mt-4 text-lg">
          Neonix Labs turns digital experiences into extraordinary ones. We
          create fun, functional technology that fits into your life and helps
          you do more. Our goal is to make products that make you wonder, “How
          did I live without this?”
        </p>
        <div className="flex mt-8">
          <Link href="/">
            <Button className="h-12 px-6">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

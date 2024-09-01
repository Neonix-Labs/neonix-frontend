export function MissionStatememnt() {
  return (
    <section className="relative container mx-auto ">
      <div className="relative bg-zinc-900 p-8 md:px-20 md:py-20 mt-20 rounded-lg flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl tracking-tight">
          Mission Statement
        </h2>
        <p className="text-zinc-200 mt-4 text-lg md:text-xl">
          Neonix Labs turns digital experiences into extraordinary ones. We
          create fun, functional technology that fits into your life and helps
          you do more. Our goal is to make products that make you wonder, “How
          did I live without this?”
        </p>
        <div className="flex mt-5">
          <a
            href="/"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white text-black   border-2 border-transparent"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

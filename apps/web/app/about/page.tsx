import { Section } from "../recap/page";

const coreValues = [
  {
    title: "User-Centric Design",
    description:
      "We prioritize user experience by ensuring our products are intuitive, easy to use, and a joy to interact with.",
  },
  {
    title: "Seamless Functionality",
    description:
      "We obsess over the details, crafting solutions that work flawlessly and integrate seamlessly into your life.",
  },
  {
    title: "Gorgeous UI",
    description:
      "We believe that aesthetics matter. Our interfaces are visually stunning, creating a delightful user experience.",
  },
  {
    title: "Web2 & Web3 Expertise",
    description:
      "We embrace the evolution of technology, building products that harness the power of both Web2 and Web3.",
  },
  {
    title: "Unexpected Delight",
    description:
      "We anticipate needs you haven't even realized yet, creating products that surprise, entertain, and make you wonder how you ever lived without them.",
  },
  {
    title: "Passion for Innovation",
    description:
      "We're relentlessly exploring new ideas, pushing the boundaries of what's possible to create truly transformative tech.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          About Us
        </h1>
        <p className="text-xl max-w-3xl mb-8 font-light">
          <strong className="underline underline-offset-2">Neonix Labs</strong>{" "}
          is a dynamic team of tech enthusiasts, designers, and innovators
          dedicated to pushing the boundaries of what's possible in the digital
          world. We're more than just a tech company; we're a playground for
          creativity, a haven for those who crave the unexpected.
        </p>
      </div>

      <Section>
        <div className="py-14">
          <div className="container mx-auto max-w-7xl space-y-12">
            <h2 className="font-bold text-4xl text-center">Core Values</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coreValues.map((core, index) => (
                <div
                  key={index}
                  className="p-0.5 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                >
                  <div className="flex flex-col h-full w-full p-6 justify-center rounded-xl bg-gray-800 space-y-4">
                    <h3 className="font-bold text-lg">{core.title}</h3>
                    <p className="text-base font-light">{core.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import { MissionStatememnt } from "@/components/mission-statement";

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
      <div className="container max-w-[750px] relative mx-auto px-4 text-center">
        <h1 className="mt-24 font-medium text-5xl mb-16 leading-snug">
          About Us
        </h1>
        <p className="text-zinc-500 mb-8">
          <strong className="underline underline-offset-2 text-white">
            Neonix Labs
          </strong>{" "}
          is a dynamic team of tech enthusiasts, designers, and innovators
          dedicated to pushing the boundaries of what's possible in the digital
          world. We're more than just a tech company; we're a playground for
          creativity, a haven for those who crave the unexpected.
        </p>
      </div>

      <div className="pt-32 relative">
        <div className="container mx-auto space-y-12">
          <h2 className="font-bold text-4xl text-center leading-snug">
            Our Values
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {coreValues.map((core, index) => (
              <div
                key={index}
                className="border border-zinc-800 basis-1/3 bg-cardCustom p-10 flex flex-col gap-4 rounded-md"
              >
                <h3 className="font-bold text-lg">{core.title}</h3>
                <p className="text-base font-light">{core.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MissionStatememnt />
    </>
  );
}

import { RecapWailist } from "@/components/waitlist";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import {
  FaCalendar,
  FaChartBar,
  FaGlobe,
  FaLink,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    logo: <FaWallet className="size-4" />,
    title: "Multi-Wallet Support",
    description:
      "Connect multiple wallets to get a comprehensive view of your Web3 presence.",
  },
  {
    logo: <FaCalendar className="size-4" />,
    title: "Customizable Date Ranges",
    description: "Analyze your activities over any time period you choose.",
  },
  {
    logo: <FaChartBar className="size-4" />,
    title: "Visual Data Presentation",
    description:
      'Get your data in a visually appealing, "Wrapped-style" summary.',
  },
  {
    logo: <FaLink className="size-4" />,
    title: "Cross-Chain Analysis",
    description:
      "Starting with BNB Chain and Ethereum, with more blockchains coming soon.",
  },
  {
    logo: <FaGlobe className="size-4" />,
    title: "Shareable Insights",
    description: "Easily share your Web3 journey on social media.",
  },
];

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
              <Link href="/talk-to-us">
                <Button variant="blueish" className="h-12 px-6">
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

      <section className="relative md:min-h-[375px] container mx-auto mt-[200px]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="my-16 md:mt-0">
            <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              What We're Working On
            </h2>
            <p className="text-4xl lg:text-5xl font-thin lg:tracking-tight mt-4">
              Introducing Recap: Your Web3 Journey, Visualized
            </p>
          </div>

          <div className="py-16 md:mt-0 border-t border-b">
            <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              What?
            </h2>
            <p className="text-2xl lg:text-3xl font-thin lg:tracking-tight mt-4">
              Recap is your Web3 storyteller. Connect your wallet, and it
              analyzes your on-chain activities, presenting them in an
              easy-to-understand way. Whether you’re new or experienced in
              crypto, Recap gives you valuable insights into your digital asset
              journey.
            </p>
          </div>

          <div className="py-16 md:mt-0 border-t border-b">
            <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Why?
            </h2>
            <p className="text-2xl lg:text-3xl font-thin lg:tracking-tight mt-4">
              In Web3, tracking activities across multiple chains and wallets
              can be tough. Recap simplifies it, giving you a clear view of your
              digital asset history, helping you make better decisions, and
              showcasing your Web3 journey.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            {features.map((feat, index) => (
              <div className="flex gap-4 items-start flex-col" key={index}>
                <div>
                  <h3 className="font-semibold text-lg flex gap-3 items-center">
                    {feat.logo}
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 pt-12">
            Stay tuned and join our waiting list to be the first to experience
            these exciting new features!
          </p>

          <RecapWailist />
        </div>
      </section>
    </>
  );
}

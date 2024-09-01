import {
  FaCalendar,
  FaChartBar,
  FaGlobe,
  FaLink,
  FaWallet,
} from "react-icons/fa";
import { RecapWailist } from "./waitlist";

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

export function BulletPoints() {
  return (
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
            Recap is your Web3 storyteller. Connect your wallet, and it analyzes
            your on-chain activities, presenting them in an easy-to-understand
            way. Whether you’re new or experienced in crypto, Recap gives you
            valuable insights into your digital asset journey.
          </p>
        </div>

        <div className="py-16 md:mt-0 border-t border-b">
          <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
            Why?
          </h2>
          <p className="text-2xl lg:text-3xl font-thin lg:tracking-tight mt-4">
            In Web3, tracking activities across multiple chains and wallets can
            be tough. Recap simplifies it, giving you a clear view of your
            digital asset history, helping you make better decisions, and
            showcasing your Web3 journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
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
  );
}

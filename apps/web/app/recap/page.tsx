"use server";

import { RecapWailist } from "@/components/waitlist";

const features = [
  {
    title: "Advanced Analytics",
    description:
      "Dive deeper into your data with gas fee analysis, smart contract interactions, and token distribution visualizations.",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Get personalized recommendations and observations based on your on-chain activities.",
  },
  {
    title: "Expanded Blockchain Support",
    description:
      "We're adding support for more popular blockchains like Polygon and Avalanche.",
  },
  {
    title: "Gamification",
    description:
      "Earn achievements based on your Web3 activities and compare your stats with others.",
  },
  {
    title: "Premium Features",
    description:
      "For our power users, we're developing advanced tools to take your analysis to the next level.",
  },
];

export default async function RecapPage() {
  return (
    <>
      <div className="container max-w-[750px] relative mx-auto hero-slide-up px-4 text-center">
        <h1 className="mt-24 font-medium text-5xl leading-snug">Recap</h1>
        <h1 className="font-thin text-5xl mb-4 leading-snug">
          Your Web3 Story, Unfolded
        </h1>
        <p className="text-[#878787] mb-8">
          Tired of sifting through endless transactions? Recap gives you the big
          picture. Connect your Web3 wallet (or simply enter your address) to
          instantly see a visual summary of your crypto activity over any time
          period.
        </p>
      </div>

      <div className="pt-32 relative">
        <div className="container mx-auto max-w-7xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Upcoming Features
            </h2>
            <p className="text-2xl lg:text-3xl font-thin lg:tracking-tight mt-4">
              Unlock the Power of Recap
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <div
                key={index}
                className="border border-border basis-1/3 bg-[#121212] p-10 flex flex-col gap-4"
              >
                <h3 className="font-bold text-lg">{feat.title}</h3>
                <p className="text-base font-light">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RecapWailist />
    </>
  );
}

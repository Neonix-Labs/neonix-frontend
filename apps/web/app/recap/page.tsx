"use client";

import { LookUpAddressMemoized } from "@/components/look-up-address";
import { MountainIcon } from "@/components/mountain-icon";
import { CheckIcon } from "@heroicons/react/16/solid";
import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { cn } from "@repo/ui/utils";

const topics = [
  {
    label: "Feature",
    title: "Connect Multiple Wallets",
    description: "View your entire crypto portfolio in one place.",
  },
  {
    label: "Feature",
    title: "Choose Your Timeframe",
    description:
      "Analyze your activity over days, weeks, months, or even years.",
  },
  {
    label: "Feature",
    title: "Visualize Your Data",
    description:
      "Get easy-to-understand charts and graphs that highlight key insights.",
  },
  {
    label: "Feature",
    title: "Share Your Story",
    description:
      "Show off your Web3 journey with shareable Wrapped-style summaries.",
  },
  {
    label: "Discover",
    title: "Top Tokens",
    description: "Which crypto assets have you traded the most?",
  },
  {
    label: "Discover",
    title: "Transaction Trends",
    description: "When are you most active?",
  },
  {
    label: "Discover",
    title: "Gas Fees",
    description: "How much are you spending?",
  },
  {
    label: "Discover",
    title: "And More",
    description:
      "Uncover hidden patterns and gain a deeper understanding of your crypto behavior.",
  },
];

const tiers = [
  {
    name: "Free",
    id: "tier-Free",
    price: "$0",
    description: "The essentials to provide your best work for clients.",
    features: [
      "Basic Wallet Connection",
      "Visual Transaction History",
      "Top Tokens Overview",
      "Transaction Trends",
      "Gas Fee Tracking",
    ],
    mostPopular: false,
  },
  {
    name: "Premium",
    id: "tier-Premium",
    price: "$30",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Basic Wallet Connection",
      "Visual Transaction History",
      "Top Tokens Overview",
      "Transaction Trends",
      "Gas Fee Tracking",
      "Advanced Analytics",
      "Portfolio Performance Tracking",
      "Tax Reporting Assistance",
      "Custom Date Range Analysis",
      "Priority Support",
    ],
    mostPopular: true,
  },
];

export default function RecapPage() {
  return (
    <>
      <div className="container max-w-[750px] relative mx-auto hero-slide-up">
        <h1 className="mt-24 font-medium text-center text-5xl leading-snug">
          Recap
        </h1>
        <h1 className="font-thin text-center text-5xl mb-4 leading-snug">
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
          <div className="text-center space-y-4">
            <h2 className="font-bold text-4xl">Features</h2>
            <p>Unlock the Power of Recap</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="border border-border basis-1/3 bg-[#121212] p-10 flex flex-col gap-4"
              >
                <div>
                  <Badge variant="secondary">{topic.label}</Badge>
                </div>
                <h3 className="font-bold text-lg">{topic.title}</h3>
                <p className="text-base font-light">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container max-w-[750px] relative mx-auto pt-32">
        <div className="px-6 lg:px-8 text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Unlock the Full Power of Recap
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-lg leading-8 text-gray-100">
            Upgrade to Recap Premium and gain access to advanced analytics,
            portfolio tracking, tax assistance, and more!
          </p>

          <div className="isolate mx-auto mt-10 flex justify-center max-w-md gap-8 lg:mx-0 lg:max-w-none flex-1 text-left">
            {tiers.map((tier, index) => (
              <div
                key={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "ring-2 ring-blue-500"
                    : "ring-1 ring-zinc-600",
                  "rounded-xl p-8 xl:p-10 space-y-8 max-w-sm text-white",
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className="text-lg font-semibold leading-8">
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-blue-500 text-white px-2.5 py-1 text-xs font-semibold leading-5">
                      One time fee
                    </p>
                  ) : null}
                </div>
                <p className="text-sm leading-6 text-gray-100">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                </p>
                {index > 0 && (
                  <Button className="w-full">
                    <MountainIcon className="size-4 mr-2" /> Get Recap
                  </Button>
                )}

                <ul className="space-y-3 text-sm leading-6 text-gray-100 xl:mt-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

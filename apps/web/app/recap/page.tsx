"use client";

import { RecapWailist } from "@/components/waitlist";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { Button } from "@repo/ui/button";
import Link from "next/link";

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
const faq = [
  {
    title: "What is the purpose of this service?",
    description:
      "Our service provides a personalized, visual summary of your Web3 wallet activities over a selected date range. It helps users track transactions, token holdings, NFT purchases, and interactions with smart contracts in a clear and interactive format.",
  },
  {
    title: "Which blockchains are supported?",
    description:
      "We currently support the BNB Chain and Ethereum blockchains, with plans to add more, such as Polygon and Avalanche, in the future.",
  },
  {
    title: "How do I connect my wallet?",
    description:
      "You can connect your wallet via MetaMask, Trust Wallet, or Coinbase Wallet. Alternatively, you can manually input your wallet address if you prefer not to connect your wallet directly.",
  },
  {
    title: "Can I analyze multiple wallets at once?",
    description:
      "Yes, you can connect or input multiple wallets, and we will aggregate the data to generate a comprehensive summary of all connected accounts.",
  },
  {
    title: "Is there a limit to the date range I can select?",
    description:
      "Free users can select a date range of up to 1 month. Premium users can select any custom date range, allowing for more in-depth analysis.",
  },
  {
    title: "How are my wallet details and data protected?",
    description:
      "We take data security seriously. Your wallet data is fetched through secure APIs, and we comply with data protection laws to ensure your information is safe. We never store private keys or sensitive information related to your wallet.",
  },
  {
    title: "Are Centralized Exchange (CEX) wallets supported?",
    description:
      "Currently, we do not support direct integration with CEX wallets (e.g., Binance), but we're exploring options to allow users to input wallet addresses associated with CEXs.",
  },
  {
    title: "What kind of visuals and insights will I get?",
    description:
      "You'll receive a dynamic, interactive 'Wrapped' style summary, including charts and graphs that visualize your wallet’s activities, token distribution, and other metrics. Users can easily share these insights on social media.",
  },
  {
    title: "What analytics can I expect in the future?",
    description:
      "Future updates will include more advanced analytics such as gas fee analysis, interactions with DeFi protocols, NFT buys and sells, and blockchain usage trends. We also plan to integrate AI-powered personalized summaries.",
  },
  {
    title: "How does pricing work for premium users?",
    description: (
      <div>
        <p>
          Premium users have access to extended features such as custom date
          ranges, additional analytics, and the ability to export custom
          templates. Our pricing options are:
        </p>
        <ul className="p-4">
          <li>- 1 Year: $4.99</li>
          <li>- 5 Years: $19.99</li>
          <li>- Lifetime: $49.99</li>
        </ul>
        <p>
          Premium members also get early access to beta features and
          personalized shout-outs on Twitter.
        </p>
      </div>
    ),
  },
  {
    title: "How do I access the full report?",
    description:
      "For free users, a portion of your summary may be blocked. To access the full report, simply enter your email to receive the complete visual summary directly in your inbox.",
  },
  {
    title: "Will I be able to share my results?",
    description:
      "Yes, we offer easy sharing options so you can post your 'Wrapped' results on social media platforms directly from our service.",
  },
];

export default function RecapPage() {
  return (
    <>
      <div className="container max-w-[750px] relative mx-auto px-4 text-center">
        <h1 className="mt-24 font-medium text-5xl leading-snug">Recap</h1>
        <h1 className="font-thin text-5xl mb-4 leading-snug">
          Your Web3 Story, Unfolded
        </h1>
        <p className="text-zinc-500 mb-8">
          Tired of sifting through endless transactions? Recap gives you the big
          picture. Connect your Web3 wallet (or simply enter your address) to
          instantly see a visual summary of your crypto activity over any time
          period.
        </p>
      </div>

      <section className="container mx-auto pt-10  px-4 relative">
        <h1 className="mt-24 font-medium text-center text-6xl leading-none">
          Pricing
        </h1>

        <div className="grid md:grid-cols-2 max-w-[800px] mx-auto gap-4 md:gap-10 mt-20">
          <div className="relative p-8 space-y-8 border border-border bg-cardCustom text-left md:p-14 rounded-lg flex flex-col">
            <h3 className="font-medium text-2xl md:text-4xl leading-none">
              Basic Features
            </h3>
            <p className="font-thin text-4xl md:text-4xl leading-none">FREE</p>

            <ul className="space-y-2">
              <li className="text-lg md:text-xl">Basic Wallet Connection</li>
              <li className="text-lg md:text-xl">Visual Transaction History</li>
              <li className="text-lg md:text-xl">Top Tokens Overview</li>
              <li className="text-lg md:text-xl">Transaction Trends</li>
              <li className="text-lg md:text-xl">Gas Fee Tracking</li>
            </ul>
          </div>

          <div className="relative p-8 space-y-8 border border-border bg-cardCustom text-left md:p-14 rounded-lg flex flex-col">
            <h3 className="font-medium text-2xl md:text-4xl leading-none">
              Premium
            </h3>
            <p className="font-thin text-4xl md:text-4xl leading-none">
              $199.99
            </p>

            <ul className="space-y-2">
              <li className="text-lg md:text-xl">Basic Wallet Connection</li>
              <li className="text-lg md:text-xl">Visual Transaction History</li>
              <li className="text-lg md:text-xl">Top Tokens Overview</li>
              <li className="text-lg md:text-xl">Transaction Trends</li>
              <li className="text-lg md:text-xl">Gas Fee Tracking</li>
              <li className="text-lg md:text-xl">Advanced Analytics</li>
              <li className="text-lg md:text-xl">
                Portfolio Performance Tracking
              </li>
              <li className="text-lg md:text-xl">Tax Reporting Assistance</li>
              <li className="text-lg md:text-xl">Custom Date Range Analysis</li>
              <li className="text-lg md:text-xl">Priority Support</li>
            </ul>

            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <Link href="/talk-to-us">
                  <Button variant="blueish" className="h-12 px-6">
                    Talk to us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-24  px-4 relative max-w-[800px]">
        <h4 className="text-4xl text-center">Frequently asked questions</h4>

        <div className="mt-10">
          {faq.map((item, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>

      <div className="pt-32 relative">
        <div className="container mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Upcoming Features
            </h2>
            <p className="text-2xl lg:text-3xl font-thin lg:tracking-tight mt-4">
              Unlock the Power of Recap
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <div
                key={index}
                className="border border-border basis-1/3 bg-cardCustom p-10 flex flex-col gap-4 rounded-md"
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

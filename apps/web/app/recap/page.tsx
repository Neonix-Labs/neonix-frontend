"use client";

import { RecapWailist } from "@/components/waitlist";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { Button } from "@repo/ui/button";
import { cn } from "@repo/ui/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

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
  const [activeTier, setActiveTier] = useState("free");
  return (
    <>
      <div className="container relative mx-auto px-4">
        <h1 className="mt-24 font-medium text-7xl leading-snug">Recap</h1>
        <h1 className="font-thin text-6xl mb-4 leading-snug">
          Your Web3 Story, Unfolded
        </h1>
        <p className="text-zinc-500 mb-8 text-2xl lg:text-3xl">
          Tired of sifting through endless transactions? Recap gives you the big
          picture. Connect your Web3 wallet (or simply enter your address) to
          instantly see a visual summary of your crypto activity over any time
          period.
        </p>
      </div>

      <div className="pt-24">
        <RecapWailist />
      </div>

      <div className="pt-32 relative">
        <div className="container mx-auto mt-10 px-4 relative space-y-8 items-center flex flex-col">
          <div className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid grid-cols-2 w-52">
            <button
              className={cn(
                activeTier === "free"
                  ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm"
                  : "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              )}
              onClick={() => setActiveTier("free")}
            >
              Basic
            </button>
            <button
              className={cn(
                activeTier === "premium"
                  ? "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm"
                  : "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              )}
              onClick={() => setActiveTier("premium")}
            >
              Recap Plus
            </button>
          </div>

          {activeTier === "free" ? (
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Basic Wallet Connection
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Visual Transaction History
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Top Tokens Overview
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Transaction Trends
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Gas Fee Tracking
              </span>
            </motion.div>
          ) : null}

          {activeTier === "premium" ? (
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Basic Wallet Connection
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Visual Transaction History
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Top Tokens Overview
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Transaction Trends
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Gas Fee Tracking
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Advanced Analytics
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Portfolio Performance Tracking
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Tax Reporting Assistance
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Custom Date Range Analysis
              </span>
              <span className="border border-border py-1.5 px-4 text-sm rounded-full">
                Priority Support
              </span>
            </motion.div>
          ) : null}
        </div>
      </div>

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

      <section className="container mx-auto pt-24 px-4 relative">
        <h4 className="text-4xl ">Frequently asked questions</h4>

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
    </>
  );
}

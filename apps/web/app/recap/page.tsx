"use server";

import { createClient } from "@repo/supabase/server";
import { Badge } from "@repo/ui/badge";
import { cookies } from "next/headers";

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

export default async function RecapPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.from("waitlist").select();

  console.log({
    data,
  });

  return (
    <>
      <div className="container max-w-[750px] relative mx-auto hero-slide-up px-4">
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
    </>
  );
}

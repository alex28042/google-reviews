import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
function BenefitsBuy() {
  const features = [
    {
      id: 1,
      text: "Raise your conversion rate from visitors to customers by positive reviews",
    },
    {
      id: 2,
      text: "Boost your Google Maps's ranking on Google Search",
    },
    {
      id: 3,
      text: "Quickly building the credibility for new brand/website",
    },
    {
      id: 4,
      text: "Increase Click Through Rate to your brand/website",
    },
    {
      id: 5,
      text: "100% Quality reviewers profile from active users",
    },
    {
      id: 6,
      text: "The review content will closely related to your brand, good and service.",
    },
    {
      id: 7,
      text: "The reviewers are from European Countries such as US, UK, etc. It's also customizable as you wish.",
    },
    {
      id: 8,
      text: "Replacement guarantee within 90 days",
    },
    {
      id: 9,
      text: "Dedicated support 24/7",
    },
  ];

  return (
    <div className="flex flex-col ml-10 w-[650px] items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Benefits of buying Google reviews</h1>
      <div>
        {features.map((feature, i) => (
          <>
            <div className="flex flex-row items-center">
              <AiOutlineCheck color="green" height={15} width={15} style={{marginRight: 10}} />
              <p key={feature.id}>{feature.text}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default BenefitsBuy;

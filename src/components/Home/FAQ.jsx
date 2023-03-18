import React from "react";

function FAQ() {
  const faq = [
    {
      title: "The Benefits of Buying Google Reviews",
      desc: "The online presence of your business is crucial. Without a established reputation and positive reviews on Google, you will struggle to attract customers to your product or service. However, there are ways to increase your credibility through Google reviews, whether it is naturally or by choosing to buy them. Let's take a look at the benefits of buying reviews and why maintaining your credibility through Google is important for the long-term success of your business.",
    },
    {
      title: "Can You Buy Reviews for Google?",
      desc: "Yes, you can buy positive reviews for Google, but you need to be cautious when doing so because there are many companies that do not want your business to succeed and only want to take your money and provide you with low-quality reviews in return. The industry is vast, which means there are plenty of options to buy, but the downside is that you will have a hard time finding reputable companies that take care of your needs while keeping your personal information safe and your brand reputation intact.",
    },
    {
      title: "Why Your Reputation Matters",
      desc: "Your online reputation matters because it affects how customers perceive your brand. More than ever, businesses need to get 5-star Google reviews because customers want to see how other people have experienced the brand. This will help them make purchasing decisions and be more informed about the overall customer experience. Let's take a look at why your reputation matters and why it is beneficial to be able to buy reviews.",
    },
    {
      title: "Improves Your Local Search Ranking",
      desc: "One of the biggest advantages of online reviews, especially Google reviews, is that you will get a boost in local search rankings. Positive Google reviews will help with revenue and rankings. It will also help your business stand out from the crowd, especially if you are in an extremely competitive industry. This is how you can make an impact and demonstrate that your company has a really good product or service that customers will benefit from using.",
    },
    {
      title: "Increases Credibility and Trust",
      desc: "Younger generations these days trust online reviews just as much as recommendations from friends and family. When you buy Google reviews, you increase the trust and credibility of your brand, and you can maintain your reputation through Google. Google is one of the most widely used and trusted search engines, so people are willing to trust Google reviews when searching for the right company to buy from.",
    },
    {
      title: "Google Reviews Can Influence Purchase Decisions",
      desc: "Positive Google reviews can provide customers with the validation they need when making purchasing decisions. Reviews can help to convince customers to choose your business over a competitor. It is essential to have positive reviews, so customers know that your company offers excellent products or services that they will benefit from using.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-[1000px]">
      {faq.map((item, i) => (
        <>
          <div className="h-[200px] border w-full mb-6 rounded-2xl border-purple-400">
            <h1 className="font-bold text-xl text-center m-3">{item.title}</h1>
            <p className="m-4">{item.desc}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default FAQ;

import { json } from "@remix-run/node";

export function loader() {
  const testimonialData = {
    id: 1,
    attributes: {
      title: "Loved by traders worldwide.",
      subTitle:
        "Simplicity is easy when you just skip tons of mission-critical features.",
      trustPilotLink: "https://uk.trustpilot.com/review/myfundedfx.com",
      createdAt: "2023-04-15T19:29:18.955Z",
      updatedAt: "2023-04-16T17:37:43.180Z",
      publishedAt: "2023-04-15T19:37:33.441Z",
      testimonial: [
        {
          id: 2,
          user: "The Surgical Trader",
          avatar:
            "https://user-images.trustpilot.com/6398a96c15fd74001248286b/73x73.png",
          review:
            "MyFundedFX has competitive pricing, very competitive spread/commission per lot and to top it all off, the best customer support. I highly recommend signing up with them. They are trustworthy.",
        },
        {
          id: 3,
          user: "Cyril komi Shaggy",
          avatar:
            "https://ui-avatars.com/api/?background=e0be77&name=Cyrill+Komi",
          review:
            "Myfundedfx is the best propfirm for me, the Always Care about theirs clients,I wish they\\n'll continue doing that even if they start having a huge number of customers. Theire support service IS like a hot chat. I got my free refund After passing the 2 phases of the challenge as they promise it . They are open to customers suggestions and apply them in a record Time. Guess what, the CEO IS a trader top and he teach how to trade on his youtube Channel I love myfundedfx fx❤️",
        },
        {
          id: 4,
          user: "Tuan",
          avatar: "https://ui-avatars.com/api/?background=e0be77&name=Tuan",
          review:
            "Very helpful, they have a discord community that really useful. My fundedfx are very clear with their rules and easy for traders",
        },
        {
          id: 6,
          user: "Nithin narayanan",
          avatar:
            "https://ui-avatars.com/api/?background=e0be77&name=Nithin+Narayanan",
          review:
            "Iam loving it ... Passed first phase will Come back and fill this after get live account 🙂🙂🫂",
        },
        {
          id: 5,
          user: "Lubos B",
          avatar: "https://ui-avatars.com/api/?background=e0be77&name=Lubos+B",
          review:
            "Currently the best prop company. Willing and accommodating support. More than fair terms and quick payout. This Christmas time has nice discounts and benefits.",
        },
        {
          id: 7,
          user: "Jomar Sarmiento",
          avatar:
            "https://user-images.trustpilot.com/633ecd3c3a39cb00124703ab/73x73.png",
          review:
            "I really like that MyFundedFX offers no commission on all their instruments. FX pairs has great tight spreads and hopefully indices spread will be improved soon. Along with that, their customer service is awesome and replies to you as quickly as possible to help you sort out any questions or problems you have. Pricing is also very competitive and the firm releases promo codes, allowing traders to lower the price. Overall, great firm by far and the CEO, Matt, is very transparent with his traders.",
        },
        {
          id: 8,
          user: "Rodolfo",
          avatar:
            "https://user-images.trustpilot.com/612ee8a2f829cc0012196464/73x73.png",
          review:
            "## PROS\n      \n- . The most affordable fees (refundable) in the industry.\n- . Raw spreads, no commissions and very little slippage.\n\n- .  Challenges with reasonable goals, no minimum trading days and\n- .  unlimited free retrials for phase 1 if you don\\'t achieve the goal but\n- .  end in profit after the 30 days without breaching the rules.\n\n\n- .  One-step program with no maximum trading days to reach the target.\n\n- .  No restrictions whatsoever on your trading style.\n- .  Crypto trading even at weekends.\n- .  Verifiable payouts up to 80% of your profit.\n\n- . You can talk directly to the CEO and COO who are more than willing to\n    assist you.\n\n- . Hardworking and kind staff ready to give you support 24/7.\n- . Learning videos on YouTube.\n\n- . Free competitions each month with great prizes.\n- . Amazing promotions and giveaways. \n\n- . Communication channels on Discord, Telegram, Twitter, Facebook,\n- . Reddit, etc.\n\n\n\n## CONS\n\n  Only MT4 platform available, although MT5 is scheduled for next coming\n  year.",
        },
        {
          id: 9,
          user: "Bag Talk",
          avatar: "https://ui-avatars.com/api/?background=e0be77&name=Bag+Talk",
          review:
            "Have the best prop accounts in the market. They actually work on helping their members pass and get funded rather than leaving them in the dust like the other firms. The CEO and other owners are active in the community and engaged with everyone. One of the best out there.",
        },
        {
          id: 10,
          user: "Craig",
          avatar: "https://ui-avatars.com/api/?background=e0be77&name=Craig",
          review:
            "Very helpful, they have a discord community that really know thier stuff. If you have an issue or need some extra knollage these guys/girls really go the extra mile to help. The members are just as nice and helpful. Easy and fast set up and they seem to be improving rules daily/weekly! Basically it's a prop firm that wants you to succeed.",
        },
        {
          id: 11,
          user: "Omar",
          avatar: "https://ui-avatars.com/api/?background=e0be77&name=Omar",
          review:
            "MyFundedFx is way more then just a prop firm. They actually care about there customers and teach and help them pass. There customer service is the best I've ever seen and they have the best rules I've seen, I will definitely be a customer for a very long time.",
        },
        {
          id: 12,
          user: "Adeelli Mostakim",
          avatar:
            "https://ui-avatars.com/api/?background=e0be77&name=Adeelli+Mostakim",
          review:
            "Honest and growing company in this industry, I liked the one-stage evaluation without a specific period",
        },
        {
          id: 13,
          user: "Bendy Jeune",
          avatar:
            "https://ui-avatars.com/api/?background=e0be77&name=Bendy+Jeune",
          review:
            "Excellent prop firm. You can make more profits with them because no commission per lot on any asset.",
        },
      ],
    },
  };

  return json(testimonialData);
}

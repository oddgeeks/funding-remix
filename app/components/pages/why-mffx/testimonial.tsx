import React from "react";

interface Testimonials {
  id: number;
  avatar: string;
  user: string;
  review: string | React.ReactNode;
}

const trustPilotSetOne: Testimonials[] = [
  {
    id: 0,
    avatar:
      "https://user-images.trustpilot.com/6398a96c15fd74001248286b/73x73.png",
    user: "The Surgical Trader",
    review:
      "MyFundedFX has competitive pricing, very competitive spread/commission per lot and to top it all off, the best customer support. I highly recommend signing up with them. They are trustworthy.",
  },
  {
    id: 1,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Cyrill+Komi",
    user: "Cyril komi Shaggy",
    review:
      "Myfundedfx is the best propfirm for me, the Always Care about theire clients,I wish they\n'll continue doing that even if they start having a huge number of customers. Theire support service IS like a hot chat. I got my free refund After passing the 2 phases of the challenge as they promise it . They are open to customers suggestions and apply them in a record Time. Guess what, the CEO IS a trader top and he teach how to trade on his youtube Channel I love myfundedfx fx❤️",
  },
  {
    id: 2,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Tuan",
    user: "Tuan",
    review:
      "Very helpful, they have a discord community that really useful. My fundedfx are very clear with their rules and easy for traders",
  },
  {
    id: 3,
    avatar:
      "https://ui-avatars.com/api/?background=e0be77&name=Nithin+Narayanan",
    user: "Nithin narayanan",
    review:
      "Iam loving it ... Passed first phase will Come back and fill this after get live account 🙂🙂🫂",
  },
  {
    id: 4,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Lubos+B",
    user: "Lubos B",
    review:
      "Currently the best prop company. Willing and accommodating support. More than fair terms and quick payout. This Christmas time has nice discounts and benefits.",
  },
];

const trustPilotSetTwo: Testimonials[] = [
  {
    id: 5,
    avatar:
      "https://user-images.trustpilot.com/633ecd3c3a39cb00124703ab/73x73.png",
    user: "Jomar Sarmiento",
    review:
      "I really like that MyFundedFX offers no commission on all their instruments. FX pairs has great tight spreads and hopefully indices spread will be improved soon. Along with that, their customer service is awesome and replies to you as quickly as possible to help you sort out any questions or problems you have. Pricing is also very competitive and the firm releases promo codes, allowing traders to lower the price. Overall, great firm by far and the CEO, Matt, is very transparent with his traders.",
  },
  {
    id: 6,
    avatar:
      "https://user-images.trustpilot.com/612ee8a2f829cc0012196464/73x73.png",
    user: "Rodolfo",
    review: <RComponent />,
  },
  {
    id: 7,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Bag+Talk",
    user: "Bag Talk",
    review:
      "Have the best prop accounts in the market. They actually work on helping their members pass and get funded rather than leaving them in the dust like the other firms. The CEO and other owners are active in the community and engaged with everyone. One of the best out there.",
  },
];

const trustPilotSetThree: Testimonials[] = [
  {
    id: 8,
    avatar:
      "https://ui-avatars.com/api/?background=e0be77&name=Jahanzaib+khalid",
    user: "jahanzaib khalid",
    review:
      "What a massive firm that is to much quick response and fast service ever don't waste your time to other prop firms join @myfundedfx and change your life",
  },
  {
    id: 9,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Craig",
    user: "Craig",
    review:
      "Very helpful, they have a discord community that really know thier stuff. If you have an issue or need some extra knollage these guys/girls really go the extra mile to help. The members are just as nice and helpful. Easy and fast set up and they seem to be improving rules daily/weekly! Basically it's a prop firm that wants you to succeed.",
  },
  {
    id: 10,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Omar",
    user: "Omar",
    review:
      "MyFundedFx is way more then just a prop firm. They actually care about there customers and teach and help them pass. There customer service is the best I've ever seen and they have the best rules I've seen, I will definitely be a customer for a very long time.",
  },
  {
    id: 11,
    avatar:
      "https://ui-avatars.com/api/?background=e0be77&name=Adeelli+Mostakim",
    user: "Adeelli Mostakim",
    review:
      "Honest and growing company in this industry, I liked the one-stage evaluation without a specific period",
  },
  {
    id: 12,
    avatar: "https://ui-avatars.com/api/?background=e0be77&name=Bendy+Jeune",
    user: "Bendy Jeune",
    review:
      "Excellent prop firm. You can make more profits with them because no commission per lot on any asset.",
  },
];

function RComponent() {
  return (
    <div>
      <p>PROS</p>
      <ul className="pb-4 pl-4 list-disc">
        <li>The most affordable fees (refundable) in the industry.</li>
        <li>Raw spreads, no commissions and very little slippage.</li>
        <li>
          Challenges with reasonable goals, no minimum trading days and
          unlimited free retrials for phase 1 if you don\'t achieve the goal but
          end in profit after the 30 days without breaching the rules.
        </li>
        <li>
          One-step program with no maximum trading days to reach the target.
        </li>
        <li>No restrictions whatsoever on your trading style.</li>
        <li>Crypto trading even at weekends.</li>
        <li>Verifiable payouts up to 80% of your profit.</li>
        <li>
          You can talk directly to the CEO and COO who are more than willing to
          assist you.
        </li>
        <li>Hardworking and kind staff ready to give you support 24/7.</li>
        <li>Learning videos on YouTube.</li>
        <li>Free competitions each month with great prizes.</li>
        <li>Amazing promotions and giveaways. </li>
        <li>
          Communication channels on Discord, Telegram, Twitter, Facebook,
          Reddit, etc.
        </li>
      </ul>
      <p>CONS</p>
      <ul className="pb-4 pl-4 list-disc">
        <li>
          Only MT4 platform available, although MT5 is scheduled for next coming
          year.
        </li>
      </ul>
    </div>
  );
}

interface TestimonialsProps {
  title?: string;
  description?: string;
}

export const WhyMFFXTestimonials: React.FC<TestimonialsProps> = (props) => (
  <>
    <div data-testid="mffx-why-mffx-testimonials">
      <div className="px:px-8 pb-10 lg:pb-20 pt-20 lg:pt-40 space-y-10 lg:space-y-20">
        <div className="text-center">
          <div className="font-lexend text-2xl lg:text-4.5xl font-semibold">
            {props.title}
          </div>
          {props?.description && (
            <div className="mt-4 font-normal text-md md:text-xl font-lexend text-funded-400">
              {props.description}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
          <div className="space-y-4">
            {trustPilotSetOne &&
              trustPilotSetOne.map((el) => (
                <div
                  key={el.id}
                  className="block p-6 border rounded-lg shadow-md bg-funded-700 border-funded-600"
                >
                  <div className="text-sm lg:text-base font-normal text-funded-1000 font-popin">
                    {el.review}
                  </div>
                  <div className="h-[1px] w-full bg-funded-600 my-3"></div>
                  <div className="flex justify-between">
                    <div className="font-normal text-lg font-popin max-w-[150px]">
                      {el.user}
                    </div>
                    <img alt="" className="rounded-full" src={el.avatar} />
                  </div>
                </div>
              ))}
          </div>
          <div className="space-y-4">
            {trustPilotSetTwo &&
              trustPilotSetTwo.map((el) => (
                <div
                  key={el.id}
                  className="block p-6 border rounded-lg shadow-md bg-funded-700 border-funded-600"
                >
                  <div className="text-base font-normal text-funded-1000 font-popin">
                    {el.review}
                  </div>
                  <div className="h-[1px] w-full bg-funded-600 my-3"></div>
                  <div className="flex justify-between">
                    <div className="font-normal text-xl font-popin max-w-[150px]">
                      {el.user}
                    </div>
                    <img alt="" className="rounded-full" src={el.avatar} />
                  </div>
                </div>
              ))}
          </div>
          <div className="space-y-4">
            {trustPilotSetThree &&
              trustPilotSetThree.map((el) => (
                <div
                  key={el.id}
                  className="block p-6 border rounded-lg shadow-md bg-funded-700 border-funded-600"
                >
                  <div className="text-base font-normal text-funded-1000 font-popin">
                    {el.review}
                  </div>
                  <div className="h-[1px] w-full bg-funded-600 my-3"></div>
                  <div className="flex justify-between">
                    <div className="font-normal text-xl font-popin max-w-[150px]">
                      {el.user}
                    </div>
                    <img alt="" className="rounded-full" src={el.avatar} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

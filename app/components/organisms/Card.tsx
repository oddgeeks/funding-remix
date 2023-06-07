import {
  CalendarDaysIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/solid";
import { v4 as uuidv4 } from "uuid";

// change card data when switch is clicked
export const Card = ({ checked }: { checked: boolean }) => {
  const cardData = [
    {
      title: "Trading Challenge",
      AggTitle: "Trading Challenge",
      img: "/card3.svg",
      no: "1",
      subheading: "Profit target",
      Aggsubheading: "Profit target",
      percentage: "8%",
      Aggpercentage: "12%",
      tradePeriod: "Unlimited",
      subDescription:
        "Choose an account size and reach the minimum profit target. Trade all available instruments. Your trading style is completely up to you!",
      minDay: "1",
      maxLoss: "8%",
      maxDailyloss: "5%",
      tradingDaysLabel: "Minimum Trading Days",
    },
    {
      title: "Verification",
      AggTitle: "Verification",
      img: "/card1.svg",
      no: "2",
      subheading: "Profit target",
      percentage: "5%",
      tradePeriod: "Unlimited",
      subDescription:
        "Continue trading with the Verification account and prove you weren’t just lucky in the challenge phase.",
      minDay: "1",
      maxLoss: "8%",
      maxDailyloss: "5%",
      tradingDaysLabel: "Minimum Trading Days",
    },
    {
      title: "MyFundedFX Trader",
      AggTitle: "MyFundedFX Trader",
      no: "3",
      img: "/card2.svg",
      subheading: "Profit Split",
      percentage: "80%",
      tradePeriod: "Unlimited",
      subDescription:
        "You can now start trading MyFundedFX proprietary trading firm’s capital without profit targets as long as you won’t reach max. loss limits. Your commission is up to 80% of all profits made after each trading period of 14 calendar days.",
      minDay: "14",
      maxLoss: "8%",
      maxDailyloss: "5%",
      tradingDaysLabel: "Minimum Calendar Days",
    },
  ];

  const cardOneStepData = [
    {
      title: "-Step",
      img: "/card3.svg",
      no: "1",
      subheading: "Profit target",
      percentage: "10%",
      Aggpercentage: "12%",
      tradePeriod: "Unlimited",
      subDescription:
        "Choose an account size and reach the minimum profit target. Trade all available instruments. Your trading style is completely up to you!",
      minDay: "1",
      maxLoss: "6%",
      maxDailyloss: "4%",
      tradingDaysLabel: "Minimum Trading Days",
    },
    {
      title: "MyFundedFX Trader",
      no: "2",
      img: "/card2.svg",
      subheading: "Profit Split",
      percentage: "80%",
      tradePeriod: "Unlimited",
      subDescription:
        "You can now start trading MyFundedFX proprietary trading firm’s capital without profit targets as long as you won’t reach max. loss limits. Your commission is up to 80% of all profits made after each trading period of 14 calendar days.",
      minDay: "14",
      maxLoss: "6%",
      maxDailyloss: "4%",
      tradingDaysLabel: "Minimum Calendar Days",
    },
  ];

  return (
    <div id="howto">
      <div
        data-testid="mffx-get-funds"
        className="mx-auto max-w-screen-2xl z-[2] md:pb-12 p-6"
      >
        <div className="py-16 mx-auto md:container">
          <div
            className={
              !checked
                ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
            }
          >
            {!checked &&
              cardData.map((data) => (
                <div
                  key={uuidv4()}
                  data-testid={`mffx-challenge-2step-${data.no}`}
                  className="rounded-lg drop-shadow-xl bg-funded-700 text-funded-800"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between flex-shrink-0">
                      <div className="flex items-center justify-start gap-3">
                        <h5 className="font-lexend font-bold text-[60px] ">
                          {data.no}
                        </h5>
                        <p className="w-1/3 text-2xl font-normal font-lexend">
                          {data.title}
                        </p>
                      </div>
                      <div className="w-[52px] h-[52px]">
                        <img src={data.img} alt="card completeness" />
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>

                    <div className="flex items-center justify-between ">
                      <div className="flex items-center justify-start gap-2 shrink-0">
                        <CursorArrowRippleIcon className="block w-5 mr-1 text-white" />
                        <p>{data.subheading}</p>
                      </div>
                      <p className="text-5xl font-medium text-funded-80 font-lexend">
                        {data.percentage}
                      </p>
                    </div>

                    <div className="flex items-center justify-between my-3 ">
                      <div className="flex items-center justify-start gap-2">
                        <CalendarDaysIcon className="block w-5 mr-1 text-white" />
                        <p>Trading period</p>
                      </div>
                      <p className="text-xl font-medium font-lexend">
                        {data.tradePeriod}
                      </p>
                    </div>
                    <div className="pt-2 mb-2">
                      <p className="mt-3 font-sm font-lexend min-h-[8.2rem] leading-6">
                        {data.subDescription}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        {data.tradingDaysLabel}
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.minDay}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>

                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        Max Initial Account Balance Loss
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.maxLoss}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>

                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        Maximum daily loss
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.maxDailyloss}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>
                  </div>
                </div>
              ))}
            {checked &&
              cardOneStepData.map((data) => (
                <div
                  key={uuidv4()}
                  data-testid={`mffx-challenge-1step-${data.no}`}
                  className="rounded-lg drop-shadow-xl bg-funded-700 text-funded-800"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between flex-shrink-0">
                      <div className="flex items-center justify-start gap-3">
                        <h5 className="font-lexend font-bold text-[60px] ">
                          {data.no}
                        </h5>
                        <p className="w-1/3 text-2xl font-normal font-lexend">
                          {data.title}
                        </p>
                      </div>
                      <div className="w-[52px] h-[52px]">
                        <img src={data.img} alt="card completeness" />
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center justify-start gap-2 shrink-0">
                        <CursorArrowRippleIcon className="block w-5 mr-1 text-white" />
                        <p>{data.subheading}</p>
                      </div>
                      <p className="text-5xl font-medium text-funded-80 font-lexend">
                        {data.percentage}
                      </p>
                    </div>

                    <div className="flex items-center justify-between my-3 ">
                      <div className="flex items-center justify-start gap-2">
                        <CalendarDaysIcon className="block w-5 mr-1 text-white" />
                        <p>Trading period</p>
                      </div>
                      <p className="text-xl font-medium font-lexend">
                        {data.tradePeriod}
                      </p>
                    </div>
                    <div className="mb-5 pt-7">
                      <p className="mt-3 font-normal font-lexend min-h-[7.4rem] leading-6">
                        {data.subDescription}
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <p className="text-lg font-lexend ">
                        Objectives overview
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        {data.tradingDaysLabel}
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.minDay}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>

                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        Max Trailing Loss
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.maxLoss}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>

                    <div className="flex justify-between px-6">
                      <p className="text-base font-normal font-lexend">
                        Maximum daily loss
                      </p>
                      <p className="text-base font-normal font-lexend">
                        {data.maxDailyloss}
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-funded-900 my-3"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

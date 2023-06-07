import React from "react";

interface Props {
  description: string;
}

export const WhyMFFXHero: React.FC = () => {
  return (
    <div
      data-testid="mffx-why-mffx-hero"
      className="flex flex-col pt-14 lg:pt-20 pb-20 lg:pb-40 gap-y-14 lg:gap-y-40"
    >
      <h1 className="text-center text-4.5xl lg:text-7xl lg:text-start font-bold">
        Why <span className="text-funded-80">MyFundedFX</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-[96px]">
        <img
          className="rounded-2xl flex-1 w-full lg:w-[50%]"
          src="/imgs/why-mffx-hero.png"
          alt="why-mffx-hero-img"
        />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 flex-1">
          <h2 className="text-2xl lg:text-4.5xl text-center lg:text-start font-semibold">
            Your success is our <span className="text-funded-80">mission</span>
          </h2>
          <div className="text-funded-400 text-base lg:text-xl">
            Our challenge program aims to provide traders an opportunity to
            trade without risking their own capital. Profitable traders are paid
            a percent of the profits they make while using our capital with no
            liability on them. You trade however you want and we cover the
            losses!
          </div>
        </div>
      </div>
    </div>
  );
};

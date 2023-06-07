import React from "react";

export const HowItWorksPayoutSystemInfo: React.FC = () => {
  return (
    <div
      data-testid="mffx-how-it-works-payout-system-info"
      className="flex flex-col items-center space-y-10 lg:space-y-[96px]"
    >
      <h2 className="text-2xl lg:text-4.5xl text-center font-semibold">
        Payout System
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-8  w-full">
        <div className="text-center flex flex-col space-y-3 items-center">
          <div className="flex">
            <span className="text-3.5xl lg:text-5xl items-end">
              14{" "}
              <span className="text-funded-80 text-base lg:text-xl">days</span>
            </span>
          </div>
          <span className="text-funded-400 text-sm lg:text-base">
            Your payout can be requested every 14 Calendar Days
          </span>
        </div>
        <div className="text-center flex flex-col space-y-3 items-center">
          <div className="flex items-end">
            <img
              src="/svg/idollar.svg"
              alt="idollar"
              className="w-3 h-4 mb-1 lg:mb-2"
            />
            <span className="text-3.5xl lg:text-5xl">50</span>
          </div>
          <span className="text-funded-400 text-sm lg:text-base">
            Minimum payout amount
          </span>
        </div>
        <div className="text-center flex flex-col space-y-3 items-center">
          <div className="flex">
            <span className="text-3.5xl lg:text-5xl">
              Deel{" "}
              <span className="text-funded-80 text-base lg:text-xl">
                or Bitcoin
              </span>
            </span>
          </div>
          <span className="text-funded-400 text-sm lg:text-base">
            Minimum payout amount
          </span>
        </div>
      </div>
    </div>
  );
};

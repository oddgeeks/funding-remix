import React, { useState } from "react";
import { Link } from "@remix-run/react";

import { CheckIcon } from "@heroicons/react/24/solid";
import ModalVideo from "react-modal-video";

export const HowItWorksHero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="GHFY_w1M5u8"
        onClose={() => setOpen(false)}
      />
      <div
        data-testid="mffx-how-it-works-hero"
        className="relative overflow-hidden"
      >
        <div className="space-y-12 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-x-[113px]">
          <div className="w-full flex flex-col justify-center gap-8">
            <h1 className="text-center text-4.5xl lg:text-7xl lg:text-start font-lexend">
              How it <span className="text-funded-80">works</span>
            </h1>
            <p className="text-base lg:text-xl text-center lg:text-start font-normal leading-6 xl:block text-funded-400 w-full">
              Our challenge program aims to provide traders an opportunity to
              trade without risking their own capital. Profitable traders are
              paid a percent of the profits they make while using our capital
              with no liability on them. You trade and we cover the losses
            </p>

            <div className="flex items-center justify-center lg:justify-start">
              <Link
                to="https://myfundedfx.tech/account/register/"
                className="font-semibold text-black flex items-center justify-center h-10 lg:h-16 rounded-lg w-52 bg-funded-90 hover:bg-funded-70"
              >
                Get Funded
              </Link>
            </div>
          </div>
          <button
            onClick={() => setOpen(!isOpen)}
            type="button"
            className="relative block w-full overflow-hidden border-4 border-funded-80 rounded-3xl focus:outline-none focus:ring-2 focus:ring-funded-80 focus:ring-offset-4"
          >
            <span className="sr-only">
              Best Strategy to Use on MyFundedFX Challenges
            </span>
            <div>
              <video
                // src="https://static.tradingview.com/static/bundles/chart-big.5ddfd85030f4ba213936.mp4"
                src="/video/MFFXN.mp4"
                muted
                loop
                autoPlay
              />
            </div>
            <span
              className="absolute inset-0 flex items-center justify-center w-full h-full transition duration-300 ease-in-out delay-150 shadow-lg hover:-translate-y-1 hover:scale-110 animate-ping"
              aria-hidden="true"
            >
              <svg
                className="w-20 h-20 text-funded-80"
                fill="currentColor"
                viewBox="0 0 84 84"
              >
                <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

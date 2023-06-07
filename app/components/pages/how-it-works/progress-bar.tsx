import React, { useState } from "react";
import classNames from "classnames";
import { Parallax } from "react-scroll-parallax";
import { v4 as uuidv4 } from "uuid";
import { Link } from "@remix-run/react";

import { Progress } from "flowbite-react";
import { StarIcon } from "@heroicons/react/24/outline";

const progressStepPoints = [150, 200, 250, 300, 350];

const mockData = [
  "Navigate to the MyFundedFX challenge dashboard and choose challenge program and account size",
  "Review the rules of the program by looking over the terms of use and checking out the discord",
  "Complete your signup by paying the one-time fee and then receive your account credentials",
  "Now it's time to evaluation process",
];

export const HowItWorksProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div
      data-testid="mffx-how-it-works-progress-bar"
      className="flex flex-col gap-10 lg:gap-20"
    >
      <h1 className="text-2xl lg:text-4.5xl text-center font-lexend">
        <span className="text-funded-80">Before</span> you are start trading
      </h1>
      <Parallax
        onProgressChange={(p) => {
          setProgress(p * 500);
        }}
      ></Parallax>
      <ol className="grid grid-cols-2 lg:grid-cols-5">
        {progressStepPoints.map((item, index) => (
          <li key={uuidv4()} className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div
                className={classNames(
                  progress < item
                    ? "text-funded-80 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-white ring-2 shrink-0"
                    : "text-funded-80 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-green-500 ring-2 shrink-0"
                )}
              >
                {(index === 4 && (
                  <StarIcon className="w-4 h-4 text-funded-80" />
                )) ||
                  index + 1}
              </div>
              <div
                className={classNames("absolute z-0", {
                  "-ml-20": index,
                  "w-20 lg:w-screen": index === 4,
                  "w-screen": index != 4,
                })}
              >
                <Progress
                  className="z-0 border-none"
                  progress={progress > item ? (progress - item) * 2 : 0.001}
                  size="sm"
                  color="green"
                />
              </div>
            </div>
            <div className="my-6 space-y-2 sm:pr-8 p-4">
              <p className="text-base font-semibold text-funded-400">
                {(index === 0 && (
                  <>
                    <span className="text-funded-80 ">Create an account</span>{" "}
                    <Link
                      className="hover:text-white"
                      to="https://myfundedfx.tech/account/register/"
                    >
                      here
                    </Link>
                  </>
                )) || <span>{mockData[index - 1]}</span>}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

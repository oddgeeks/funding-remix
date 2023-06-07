import React from "react";

interface Props {
  title?: string;
  description: string;
}

export const WhyMFFXGetFunded: React.FC<Props> = (p) => {
  return (
    <div
      data-testid="mffx-why-mffx-getfunded"
      className="rounded-lg relative bg-funded-720 my-20 lg:my-40 text-sm lg:font-medium px-8 lg:px-40 pt-20 lg:pt-[110px] pb-20 flex flex-col items-center"
    >
      <img
        src="/svg/bglinegraph.svg"
        alt="bg"
        className="absolute z-0 left-0 top-0 w-[300px] lg:w-[1045px]"
      />
      <div className="z-20">
        <h2 className="text-center text-2xl lg:text-4.5xl pb-[32px] lg:pb-10 font-semibold">
          {p.title}
        </h2>
        <div className="text-sm lg:text-xl text-center text-funded-400 pb-[56px] lg:pb-16">
          {p.description}
        </div>
        <div className="flex items-center justify-center">
          <button className="text-base bg-funded-80 w-[142px] h-[42px] lg:h-[64px] text-black rounded-lg animate-bounce">
            Get funded
          </button>
        </div>
      </div>
    </div>
  );
};

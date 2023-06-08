import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title?: string;
  data: { src: string; title: string; description: string }[];
}

export const WhyMFFXSuggest: React.FC<Props> = (p) => {
  return (
    <div
      data-testid="mffx-why-mffx-suggest"
      className="pt-20 lg:pt-[136px] space-y-10 lg:space-y-20"
    >
      <h2 className="text-2xl lg:text-4.5xl text-center font-semibold">
        We suggest even <span className="text-funded-80">more</span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8 gap-y-8">
        {p.data.map((item) => (
          <div
            key={uuidv4()}
            className="flex flex-col items-center px-2 gap-y-8"
          >
            <img
              src={item.src}
              alt={item.src}
              className="rounded-lg w-[450px] h-[250px]"
            />
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl lg:text-2xl tracking-tight text-center">
                {item.title}
              </h2>
              <div className="text-sm leading-6 text-funded-400">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

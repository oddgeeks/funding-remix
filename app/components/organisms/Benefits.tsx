import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title?: string;
  data: { src: string; title: string; description: string }[];
}

export const Benefits: React.FC<Props> = (p) => {
  return (
    <div className="space-y-10 lg:space-y-20">
      <h2 className="text-2xl md:text-3.5xl lg:text-4.5xl text-center font-semibold">
        MFFX <span className="text-funded-80">benefits</span>
      </h2>
      <div className="rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {p.data.map((item) => (
            <div
              key={uuidv4()}
              className="flex flex-col items-center px-6 py-8 lg:px-8 lg:py-10 text-center border border-funded-600 bg-funded-700"
            >
              <img
                src={item.src}
                alt={item.src}
                className="w-12 lg:w-16 h-12 lg:h-16"
              />
              <div>
                <div className="text-base lg:text-2xl tracking-tight mt-6 mb-4">
                  {item.title}
                </div>
                <div className="text-sm lg:text-base text-funded-400">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

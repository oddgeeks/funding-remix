import React from "react";

import Typewriter from "typewriter-effect";

import IFooterTypewriter from "./icons/IFooterTypewriter.svg";

interface FooterTypewriterProps {
  strings: string[];
  to?: string;
}

export const FooterTypewriterLink: React.FC<FooterTypewriterProps> = ({
  strings = [],
  to = " ",
}) => {
  return (
    <a
      href={to}
      target="blank"
      className="flex justify-end gap-x-3 pb-8 xl:pb-6 self-end font-medium font-popin"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-funded-1300 to-orange-400 hover:from-orange-400 hover:to-orange-600 ">
        <div className="sr-only">{strings[0]}</div>
        <Typewriter
          options={{
            strings,
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <img src={IFooterTypewriter} alt="IFooterTypewriter" />
    </a>
  );
};

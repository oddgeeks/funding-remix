import React from "react";
import { Link } from "@remix-run/react";

import IFacebook from "./icons/IFacebook.svg";
import IDiscord from "./icons/IDiscord.svg";
import IYoutube from "./icons/IYoutube.svg";
import ITelegram from "./icons/ITelegram.svg";
import IMFFXLogo from "./icons/IMFFXLogo.svg";

interface FooterAboutProps {
  text?: string;
  className?: string;
}

export const FooterAbout: React.FC<FooterAboutProps> = ({
  text = " ",
  className = " ",
}) => {
  return (
    <div className={`flex justify-between gap-x-6 w-full ${className}`}>
      <Link
        to={"/"}
        className="shrink-0 p-2.5 w-[76px] h-[87px] flex items-center justify-center hover:opacity-30"
      >
        <img
          src={IMFFXLogo}
          className="w-full h-full"
          alt="My Funded FX graphic"
        />
      </Link>
      <div className="flex flex-col gap-8 w-full">
        <span className="w-full text-sm text-[#4C4E50]">{text}</span>
        <div className="flex items-center gap-2 lg:gap-6">
          <a
            href="https://www.facebook.com/groups/319362443523972"
            target="blank"
            className="text-funded-550 hover:opacity-50"
          >
            <img className="w-6 h-6" src={IFacebook} alt={IFacebook} />
          </a>
          <a
            className="text-funded-550 hover:opacity-50"
            href="https://discord.gg/Zd8FVT9uSH"
            target="_blank"
            data-testid="mffx-footer-discord"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={IDiscord} alt={IDiscord} />
          </a>
          <a
            className="text-funded-550 hover:opacity-50"
            href="https://www.youtube.com/channel/UCI_83gCP73twaM8CST2ffGw"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={IYoutube} alt={IYoutube} />
          </a>
          <a
            className="text-funded-550 hover:opacity-50"
            href="https://t.me/myfundedfxpropfirm"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={ITelegram} alt={ITelegram} />
          </a>
        </div>
      </div>
    </div>
  );
};

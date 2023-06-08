import React from "react";
import { Link } from "@remix-run/react";
import { v4 as uuidv4 } from "uuid";

interface FooterNavBarProps {
  className?: string;
  items: {
    to: string;
    className?: string;
    text: string;
  }[];
}

export const FooterNavBar: React.FC<FooterNavBarProps> = ({
  items = [],
  className = " ",
}) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-8 gap-y-6 pb-8 xl:pb-6 text-base text-[#838383] ${className}`}
    >
      {items &&
        items.map((item) => (
          <Link
            to={item.to}
            key={uuidv4()}
            className={`hover:text-funded-80 whitespace-nowrap ${item.className}`}
          >
            {item.text}
          </Link>
        ))}
    </div>
  );
};

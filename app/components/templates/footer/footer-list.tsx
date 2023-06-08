import React, { useState } from "react";
import { Link } from "@remix-run/react";
import { v4 as uuidv4 } from "uuid";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface FooterLinkListProps {
  title?: string;
  list?: FooterLinkListItemProps[];
}

interface FooterLinkListItemProps {
  text?: string;
  to?: string;
  subList?: {
    text: string;
    to: string;
  }[];
}

export const FooterLinkListItem: React.FC<FooterLinkListItemProps> = (
  props: FooterLinkListItemProps
) => {
  const [isCollapsed, setIsCallapsed] = useState(false);

  return (
    <>
      {(props.subList && (
        <div
          onClick={() => setIsCallapsed(!isCollapsed)}
          className="cursor-pointer hover:text-funded-80 flex items-center gap-x-2"
        >
          {props?.text}
          {(!isCollapsed && <ChevronDownIcon className="w-5 h-5" />) || (
            <ChevronUpIcon className="w-5 h-5" />
          )}
        </div>
      )) || (
        <Link
          to={props.to || "/"}
          className="cursor-pointer hover:text-funded-80 flex items-center gap-x-2"
        >
          {props?.text}
        </Link>
      )}

      {props?.subList && isCollapsed && (
        <ul className="pl-6 pt-4 gap-y-3 flex flex-col items-start text-sm ">
          {props.subList.map((item) => (
            <Link
              to={item.to}
              className="cursor-pointer hover:text-funded-80"
              key={uuidv4()}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export const FooterLinkList: React.FC<FooterLinkListProps> = ({
  title,
  list,
}) => {
  const [isCollapsed, setIsCallapsed] = useState(false);

  return (
    <>
      {/* desktop mode */}
      <div className="hidden lg:flex flex-col gap-y-8 w-fit lg:w-[230px] whitespace-nowrap">
        <div className="flex items-center text-xl font-semibold">
          <h3>{title}</h3>
        </div>
        <div className="flex flex-col gap-y-6 text-[#838383]">
          {list?.map((item) => (
            <div key={uuidv4()}>
              <FooterLinkListItem {...item} />
            </div>
          ))}
        </div>
      </div>
      {/* mobile mode */}
      <div className="flex lg:hidden flex-col w-fit">
        <div
          onClick={() => setIsCallapsed(!isCollapsed)}
          className="flex items-center gap-x-2 text-xl font-semibold cursor-pointer hover:text-funded-80"
        >
          <h3>{title}</h3>
          {true &&
            ((!isCollapsed && <ChevronDownIcon className="w-6 h-6" />) || (
              <ChevronUpIcon className="w-6 h-6" />
            ))}
        </div>
        {isCollapsed && (
          <div className="pt-8 flex flex-col gap-y-6 text-[#838383]">
            {list?.map((item) => (
              <div key={uuidv4()}>
                <FooterLinkListItem {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

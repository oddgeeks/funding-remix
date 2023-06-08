import { Link } from "@remix-run/react";

export const HeaderLogo = () => {
  return (
    <div className="order-none flex flex-col gap-2.5 flex-start w-[186px] h-[50px]">
      <Link to="/" className="w-full h-full">
        <img
          src="./logo.png"
          alt="MFFX logo"
          className="w-full h-full object-center"
        />
      </Link>
    </div>
  );
};

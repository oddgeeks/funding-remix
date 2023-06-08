import { Link } from "@remix-run/react";
import { useState } from "react";
import { LoginDialog } from "~/components/organisms/LoginDialog";

export const HeaderCTAs = () => {
  const [LoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
  return (
    <div className="order-2 lg:flex items-center justify-center gap-8 hidden">
      <button
        type="button"
        onClick={() => setLoginDialogOpen(true)}
        className="text-white hover:text-funded-60 text-base font-bold"
      >
        Login
      </button>

      <LoginDialog
        openDialog={LoginDialogOpen}
        setLoginDialogOpen={setLoginDialogOpen}
      />

      <Link
        to="https://myfundedfx.tech/account/register/"
        target="_blank"
        className="bg-funded-90 flex items-center justify-center py-2 px-4 gap-2 rounded-lg shadow-sm text-funded-600 text-base font-medium leading-[18.75px] transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-funded-70"
      >
        Get funded
      </Link>
    </div>
  );
};

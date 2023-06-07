import { Dialog } from "@headlessui/react";

interface Props {
  openDialog: boolean;
  setLoginDialogOpen: (open: boolean) => void;
}

export function LoginDialog({ openDialog, setLoginDialogOpen }: Props) {
  return (
    <Dialog
      open={openDialog}
      onClose={setLoginDialogOpen}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-funded-710 ">
        <Dialog.Panel className="relative w-screen h-screen max-w-2xl p-8 shadow-2xl md:h-max md:w-full md:p-12 bg-gradient-to-r from-funded-575 to-funded-570 md:rounded-xxl">
          <div>
            <button
              onClick={() => setLoginDialogOpen(false)}
              className="absolute top-10 right-5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7 5.93934L12.4697 0.469671C12.7626 0.176777 13.2374 0.176778 13.5303 0.469671C13.8232 0.762564 13.8232 1.23744 13.5303 1.53033L8.06066 7L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L7 8.06066L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-center md:flex-row">
            <div className="flex flex-col justify-center w-full gap-5 pb-10 pr-0 text-left md:w-1/2 md:pr-5 md:pb-5">
              <div className="mt-6 text-2xl font-bold font-lexend md:mt-0">
                <span className="text-funded-50">New </span> TradeHub Login
              </div>
              <div className="pb-5 text-base font-lexend text-funded-400 md:pb-0">
                Login to the new TradeHub to trade on all newly purchased
                accounts after February 21st
              </div>
              <div className="w-full pt-2 text-left">
                <a
                  href="https://myfundedfx.tech/Account/Login"
                  className="p-4 mx-auto text-base font-medium rounded-lg w-max text-funded-150 bg-funded-50 hover:bg-funded-60"
                >
                  Login to TradeHub
                </a>
              </div>
            </div>

            <div className="flex flex-col w-full space-y-6 text-left border-t-2 md:border-t-0 md:border-l-2 border-funded-400 md:pl-6 lg:pt-0 md:w-1/2">
              <div className="mt-4 text-2xl font-bold font-lexend md:mt-0">
                Old Trader Login
              </div>
              <div className="pb-5 text-base font-lexend text-funded-400 md:pb-0">
                Login to old trader area to access all accounts purchased prior
                to February 21st.
              </div>
              <div className="w-full text-left flex-end ">
                <a
                  href="https://trade.myfundedfx.com/log-in"
                  className="p-4 mx-auto text-base font-medium text-white border rounded-lg w-max hover:text-funded-50 hover:border-funded-60 border-funded-50"
                >
                  Login to Old Dashboard
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

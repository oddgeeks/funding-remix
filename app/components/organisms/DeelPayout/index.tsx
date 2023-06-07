import classNames from "classnames";

export const DeelPayount = ({ className }: { className?: string }) => {
  return (
    <div
      data-testid="mffx-payout-system"
      className={classNames(
        "px-8 mx-auto flex flex-col items-center justify-between gap-10 max-w-7xl md:flex-row",
        className
      )}
    >
      <div className="w-full text-center text-white font-lexend md:w-1/2 text-5xs md:text-left">
        <p className="text-2xl">
          <span className="text-funded-50">Payout</span> system
        </p>
        <br />
        <p className="text-base text-funded-400 font-lexend">
          All payouts can be requested through Deel which allows to use up to 15
          payment options such as Bank Transfer, Deel card, Coinbase, PayPal,
          Payoneer, Revolut, Wise etc.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="./deel-payout.webp"
          alt="deel payout"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

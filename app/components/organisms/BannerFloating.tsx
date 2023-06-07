export function BannerFloating() {
  return (
    <div className="relative md:hidden">
      <div className="fixed bottom-0 left-0 right-0 px-8 py-4 text-center shadow-xl bg-funded-700">
        <div className="w-full my-5 ">
          <div className="flex justify-center text-lg font-medium">
            <a
              data-testid="mffx-mobile-make-your-selection-sign-up"
              href="https://myfundedfx.tech/account/register/"
              className="w-full p-2 mx-auto text-lg text-center text-black rounded-lg bg-funded-50 hover:bg-funded-60"
            >
              Get Funded
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

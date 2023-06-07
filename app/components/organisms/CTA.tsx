export function CTA() {
  return (
    <div>
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl tracking-tight sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block mt-2 text-2xl font-normal">
            Sign up, select your desired challenge account and Get Funded!
          </span>
        </h2>
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              data-testid="mffx-make-your-selection-sign-up"
              href="https://myfundedfx.tech/account/register/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium border border-transparent rounded-md animate-bounce text-funded-150 bg-funded-90 hover:bg-funded-80"
            >
              Get Funded
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

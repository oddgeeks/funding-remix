export function Example() {
    return (
        <div data-testid="mffx-dashboard" className="pt-32">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by professional traders</h2>
                    <p className="mt-3 text-xl text-gray-400 sm:mt-4">
                        Our prop trading firm offers up to <span className="text-funded-80">$600,000</span> in funded
                        accounts
                    </p>
                </div>
            </div>
            <div className="mt-10 sm:pb-16">
                <div className="relative">
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                                <div className="flex flex-col p-6 text-center border-b sm:border-0 sm:border-r border-funded-600 bg-funded-700">
                                    <dd className="order-1 text-xl tracking-tight ">No Maximum Trading Days</dd>
                                    <dt className="order-2 mt-2 leading-6 text-gray-400">
                                        Unlimited trading days on all plan types and all phases
                                    </dt>
                                </div>
                                <div className="flex flex-col p-6 text-center border-t border-b sm:border-0 border-funded-600 bg-funded-700">
                                    <dt className="order-2 mt-2 leading-6 text-gray-400">
                                        Get funded in as little as two days
                                    </dt>
                                    <dd className="order-1 text-xl tracking-tight ">No Minimum Trading Days</dd>
                                </div>
                                <div className="flex flex-col p-6 text-center border-t sm:border-0 sm:border-l border-funded-600 bg-funded-700">
                                    <dt className="order-2 mt-2 font-medium leading-6 text-gray-400">
                                        With no consistency rules, you are free to trade how you want
                                    </dt>
                                    <dd className="order-1 text-xl tracking-tight ">No Style Restrictions</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const TraderDashboard = () => (
    <div data-testid="mffx-challange-account" className="relative z-20 mx-auto mb-24 max-w-screen-2xl scroll">
        <Example />
    </div>
);

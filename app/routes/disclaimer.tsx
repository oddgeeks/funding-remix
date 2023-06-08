import { Client, HydrationProvider } from 'react-hydration-provider';
import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { TopBanner } from '~/components/organisms/TopBanner';
import { Footer } from '~/components/templates/footer';
import { getPromotionBannerData } from '~/modules/queries/topBannner.server';
import type { PromotionalBannerType } from '~/types';
import { NavBar } from '~/components/templates/header';

type LoaderData = {
    promotionalBanner: PromotionalBannerType;
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Disclaimer | Top Prop Firm | MyFundedFX',
    description:
        'Achieve trading freedom with MyFundedFX! Our platform offers no time limits, inactivity rules, or trading days requirements. Join now for complete control over your trades and fast payouts!',
    viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
    let promotionalBanner = await getPromotionBannerData();

    if (!promotionalBanner) {
        promotionalBanner = await (await fetch('/api/stub/top-banner')).json();
    }

    return json<LoaderData>({
        promotionalBanner,
    });
};

export default function Disclaimer() {
    const { promotionalBanner } = useLoaderData<LoaderData>();

    return (
        <>
            <HydrationProvider>
                {promotionalBanner && (
                    <>
                        <Client>
                            <TopBanner promotionalBanner={promotionalBanner} />
                        </Client>
                    </>
                )}
            </HydrationProvider>
            <NavBar />
            <div className="mx-auto max-w-7xl">
                <div className="relative py-16 overflow-hidden">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg" aria-hidden="true"></div>
                    </div>
                    <div className="relative px-8 lg:px-0">
                        <div className="mx-auto text-lg">
                            <p>
                                <span className="block text-base font-semibold tracking-wide text-center uppercase text-funded-50">
                                    Disclaimer
                                </span>
                                <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">
                                    My Funded Fx
                                </span>
                            </p>
                            <p className="mt-8 text-xl leading-8 ">
                                All content published and distributed by MyFundedFX LLC, MyFundedFX, and its affiliates
                                (collectively, the “Company”) is to be treated as general information only. None of the
                                information provided by the Company or contained herein is intended as investment
                                advice, an offer or solicitation of an offer to buy or sell, or a recommendation,
                                endorsement, or sponsorship of any security, company, or fund. Leveraged products such
                                as CFD’s and Forex trading are complex instruments with a high risk of losing money. The
                                products offered are intended for professional and retail clients. Please note that
                                client accounts could sustain losses of deposited funds or in some cases even exceeding
                                their deposit amount. Please note; The information on the website is not directed at any
                                jurisdiction and is not intended for any use that would be contrary to local law or
                                regulation. MyFundedFX LLC is a registered entity in Texas, USA and is compliant with
                                all necessary laws and regulations provided in accordance with local and federal
                                jurisdictions. Copyright (c) 2022. All right Reserved. MyFundedFX LLC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-8 pb-24 md:pb-0 md:px-0">
                <Footer />
            </div>
        </>
    );
}

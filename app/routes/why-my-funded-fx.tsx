import React from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { LoaderFunction, json } from 'react-router';
import { ParallaxProvider } from 'react-scroll-parallax';
import { getTestimonialData } from '~/modules/queries/testimonial.server';
import { getPromotionBannerData } from '~/modules/queries/topBannner.server';
import { useLoaderData } from '@remix-run/react';
import { TopBanner } from '~/components/organisms/TopBanner';

import { WhyMFFXPage } from '~/components/pages/why-mffx';
import type { PromotionalBannerType, getTestimonialType } from '~/types';
import { MetaFunction } from '@remix-run/node';

type LoaderData = {
    promotionalBanner: PromotionalBannerType;
    testimonials: getTestimonialType;
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Why MyFundedFX | Best Prop Firm | MyFundedFX',
    description:
        'Looking for a prop firm with ultimate freedom and flexibility? MyFundedFX offers no time limits, no inactivity rules, no trading days requirement, and a fast 14-day payout window. Get Funded Today!',
    viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
    let promotionalBanner = await getPromotionBannerData();

    let testimonials = await getTestimonialData();

    if (!testimonials) {
        testimonials = await (await fetch('/api/stub/testimonials-section')).json();
    }

    if (!promotionalBanner) {
        promotionalBanner = await (await fetch('/api/stub/top-banner')).json();
    }

    return json<LoaderData>({
        promotionalBanner,
        testimonials,
    });
};

const WhyMFFX: React.FC = () => {
    const { testimonials, promotionalBanner } = useLoaderData<LoaderData>();

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

            <ParallaxProvider>
                <WhyMFFXPage testimonials={testimonials} />
            </ParallaxProvider>
        </>
    );
};

export default WhyMFFX;

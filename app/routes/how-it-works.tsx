import { useEffect, useRef } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { MetaFunction, json } from '@remix-run/node';
import { useActionData, useLoaderData, useTransition } from '@remix-run/react';
import { getAcoordianData } from '~/modules/queries/faqs.server';
import { getHeroSection } from '~/modules/queries/heroSection.server';
import { getPromotionBannerData } from '~/modules/queries/topBannner.server';
import { getStartedData } from '~/modules/queries/getStarted.server';
import { ParallaxProvider } from 'react-scroll-parallax';
import { TopBanner } from '~/components/organisms/TopBanner';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';

import type { PromotionalBannerType, heroSectionType, FaqsType, getStartedType } from '~/types';

import { HowItWorksPage } from '~/components/pages/how-it-works';

type LoaderData = {
    promotionalBanner: PromotionalBannerType;
    heroSection: heroSectionType;
    faqsData: FaqsType;
    getStarted: getStartedType;
};

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const emailId = formData.get('email');

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': `${process.env.SENDIN_BLUE_API_KEY}`,
        },

        body: JSON.stringify({
            updateEnabled: false,
            email: emailId,
            listIds: [7],
        }),
    };

    const res = fetch('https://api.sendinblue.com/v3/contacts', options)
        .then((response) => response.json())
        .catch((err) => {
            throw new Error(err);
        });

    return json({ sendinBlue: res });
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'How it works | Top Prop Firm | MyFundedFX',
    description:
        'Looking for a prop firm with complete trading control? MyFundedFX offers flexibility with no time limits, inactivity rules, or trading days requirements. Join now and trade on your own terms!',
    viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
    const promotionalBanner = await getPromotionBannerData();
    let faqsData = await getAcoordianData();
    let heroSection = await getHeroSection();
    let getStarted = await getStartedData();

    if (!heroSection) {
        heroSection = await (await fetch('/api/stub/hero-section')).json();
    }

    if (!faqsData) {
        faqsData = await (await fetch('/api/stub/faqs-section')).json();
    }

    if (!getStarted) {
        getStarted = await (await fetch('/api/stub/get-started')).json();
    }

    return json<LoaderData>({
        promotionalBanner,
        heroSection,
        faqsData,
        getStarted,
    });
};

export default function HowItWorks() {
    const actionData = useActionData();
    const transition = useTransition();
    const { promotionalBanner, heroSection, faqsData, getStarted } = useLoaderData<LoaderData>();

    const state: 'idle' | 'success' | 'error' | 'submitting' = transition.submission
        ? 'submitting'
        : actionData
        ? 'success'
        : actionData?.message
        ? 'error'
        : 'idle';

    const inputRef = useRef<HTMLInputElement>(null);
    const successRef = useRef<HTMLHeadingElement>(null);
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        if (state === 'error') {
            inputRef.current?.focus();
        }

        if (state === 'idle' && mounted.current) {
            inputRef.current?.select();
        }

        if (state === 'success') {
            successRef.current?.focus();
        }

        mounted.current = true;
    }, [state]);

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
                <HowItWorksPage
                    state={state}
                    inputRef={inputRef}
                    promotionalBanner={promotionalBanner}
                    heroSection={heroSection}
                    faqsData={faqsData}
                    getStarted={getStarted}
                />
            </ParallaxProvider>
        </>
    );
}

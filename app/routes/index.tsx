import { useEffect, useRef } from 'react';

import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useActionData, useLoaderData, useTransition } from '@remix-run/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Homepage } from '~/components/pages/homepage';
import { getAcoordianData } from '~/modules/queries/faqs.server';
import { getStartedData } from '~/modules/queries/getStarted.server';
import { getHeroSection } from '~/modules/queries/heroSection.server';
import { getTestimonialData } from '~/modules/queries/testimonial.server';
import { getPromotionBannerData } from '~/modules/queries/topBannner.server';
import type { PromotionalBannerType, heroSectionType, FaqsType, getStartedType, getTestimonialType } from '~/types';

type LoaderData = {
    promotionalBanner: PromotionalBannerType;
    heroSection: heroSectionType;
    faqsData: FaqsType;
    getStarted: getStartedType;
    testimonials: getTestimonialType;
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

export const loader: LoaderFunction = async () => {
    const promotionalBanner = await getPromotionBannerData();
    let faqsData = await getAcoordianData();
    let heroSection = await getHeroSection();
    let getStarted = await getStartedData();
    let testimonials = await getTestimonialData();

    if (!getStarted) {
        getStarted = await (await fetch('/api/stub/get-started')).json();
    }

    if (!heroSection) {
        heroSection = await (await fetch('/api/stub/hero-section')).json();
    }

    if (!faqsData) {
        faqsData = await (await fetch('/api/stub/faqs-section')).json();
    }

    if (!testimonials) {
        testimonials = await (await fetch('/api/stub/testimonials-section')).json();
    }
    return json<LoaderData>({
        promotionalBanner,
        faqsData,
        heroSection,
        getStarted,
        testimonials,
    });
};

export default function Index() {
    const actionData = useActionData();
    const transition = useTransition();
    const { promotionalBanner, heroSection, faqsData, getStarted, testimonials } = useLoaderData<LoaderData>();
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
        <ParallaxProvider>
            <Homepage
                state={state}
                inputRef={inputRef}
                promotionalBanner={promotionalBanner}
                heroSection={heroSection}
                faqsData={faqsData}
                getStarted={getStarted}
                testimonials={testimonials}
            />
        </ParallaxProvider>
    );
}

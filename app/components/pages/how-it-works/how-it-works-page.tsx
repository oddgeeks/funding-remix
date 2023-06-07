import type { LegacyRef } from 'react';
import { HydrationProvider, Client } from 'react-hydration-provider';
import { Parallax } from 'react-scroll-parallax';

import type { FaqsType, PromotionalBannerType, heroSectionType, getStartedType } from '~/types';

import { Benefits, DeelPayount, Faq, BrokerSection, Newsletter } from '~/components/organisms';
import { GetStarted } from '~/components/templates/getStarted';
import {
    HowItWorksHero,
    HowItWorksProgressBar,
    HowItWorksEvaluationProcess,
    HowItWorksAccountRules,
    HowItWorksTradingObjectives,
    HowItWorksLiveAccount,
    HowItWorksPayoutSystemInfo,
} from '~/components/pages/how-it-works';
import { Footer } from '~/components/templates/footer';
import { NavBar } from '~/components/templates/header';

// mock data
const mockBenefitsData = [
    {
        src: '/svg/ichart.svg',
        title: 'Any trading style',
        description:
            'We do not restrict trading style. You can make any type of trades you would like including scalping hedging (in the same account) swing trading martingale strategies, grid trading etc.',
    },
    {
        src: '/svg/imoney.svg',
        title: 'Trade with up to $600,000',
        description:
            'To increase your chances of profitability, we are offering you up to $600,000 funds in our Evaluation model',
    },
    {
        src: '/svg/ischedule.svg',
        title: 'No Max & Min Trading Days',
        description: 'Unlimited trading days on all plan types and all phases. Get funded in as little as two days',
    },
    {
        src: '/svg/iplan.svg',
        title: 'Scaling plan',
        description:
            'Currently we offer a scaling plan that increases your accounts initial balance by 25% every 3 months assuming certain criteria is met. Your account must be a fresh account at the starting balance, you must also have achieved a total profit of 12% or more within the 90 day period before requesting a scale up',
    },
    {
        src: '/svg/itool.svg',
        title: 'Use any instruments',
        description: '175+ Assets including Forex, Indices, Crypto, and Commodities',
    },
    {
        src: '/svg/imoney.svg',
        title: 'One-time refundable fee',
        description:
            'You have to pay just once. If you pass the challenge and verification you will receive your paid fee back',
    },
];

const mockSuggestData = [
    {
        src: '/imgs/girl.png',
        title: 'Support 24/7',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
    },
    {
        src: '/imgs/girl.png',
        title: 'Trading academy',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
    },
    {
        src: '/imgs/girl.png',
        title: 'Coaching',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
    },
];

export function HowItWorksPage({
    state,
    inputRef,
    faqsData,
    heroSection,
    promotionalBanner,
    getStarted,
}: {
    state: 'idle' | 'success' | 'error' | 'submitting';
    inputRef: LegacyRef<HTMLInputElement>;
    promotionalBanner?: PromotionalBannerType;
    faqsData: FaqsType;
    heroSection?: heroSectionType;
    getStarted?: getStartedType;
}) {
    return (
        <div className="relative min-w-[320px]">
            <img src="/svg/bglinegraph.svg" alt="bg" className="absolute left-0 top-0 w-[375px] lg:w-[700px] -z-10" />
            <NavBar />
            <div className="px-8 mx-auto mt-12 overflow-hidden xl:mt-16 md:container">
                <div className="flex flex-col gap-y-20 lg:gap-y-[200px]" data-testid="mffx-how-it-works-page">
                    <HydrationProvider>
                        {heroSection && (
                            <>
                                <Client>
                                    <HowItWorksHero />
                                </Client>
                            </>
                        )}
                    </HydrationProvider>

                    <HowItWorksProgressBar />

                    <Parallax opacity={[-1, 10]}>
                        <HowItWorksEvaluationProcess />
                    </Parallax>

                    <Parallax opacity={[-1, 10]}>
                        <HowItWorksAccountRules />
                    </Parallax>

                    <Parallax opacity={[-1, 10]}>
                        <HowItWorksLiveAccount />
                    </Parallax>

                    <Parallax opacity={[-1, 10]}>
                        <HowItWorksTradingObjectives />
                    </Parallax>

                    <Parallax opacity={[-3, 10]}>
                        <Benefits data={mockBenefitsData} />
                    </Parallax>

                    <Parallax opacity={[-3, 10]}>
                        <BrokerSection />
                    </Parallax>
                    <Parallax opacity={[-3, 10]}>
                        <HowItWorksPayoutSystemInfo />
                    </Parallax>

                    <DeelPayount />

                    <Parallax opacity={[-2, 10]}>
                        <HydrationProvider>
                            {getStarted && (
                                <>
                                    <Client>
                                        <GetStarted getStarted={getStarted} />
                                    </Client>
                                </>
                            )}
                        </HydrationProvider>
                    </Parallax>

                    <Parallax opacity={[-2, 10]}>
                        <Faq faqsData={faqsData} />
                    </Parallax>
                    <Parallax opacity={[-2, 10]}>
                        <Newsletter state={state} inputRef={inputRef} />
                    </Parallax>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

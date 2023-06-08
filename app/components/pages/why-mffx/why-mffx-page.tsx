import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import {
    WhyMFFXHero,
    WhyMFFXShowResults,
    WhyMFFXBenefits,
    WhyMFFXSuggest,
    WhyMFFXWhyChose,
    WhyMFFXGetFunded,
} from '~/components/pages/why-mffx';
import { NavBar } from '~/components/templates/header';
import { Footer } from '~/components/templates/footer';
import { HydrationProvider, Client } from 'react-hydration-provider';
import { Testimonials } from '~/components/organisms';
import { getTestimonialType } from '~/types';

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

const mockWhyChose = {
    videoSrc: '/video/why-mffx.mp4',
    description:
        'Watch interviews with the most successful and emerging traders who share their own selection criteria',
};

const mockResultData = {
    activeNumber: 30000,
    totalProfilt: 6000000,
    averageProfit: 6000,
};

export const WhyMFFXPage: React.FC<{ testimonials?: getTestimonialType }> = ({ testimonials }) => {
    const [entered, setEntered] = useState(false);

    return (
        <>
            <div className="relative min-w-[320px]">
                <img
                    src="/svg/bglinegraph.svg"
                    alt="bg"
                    className="absolute left-0 top-0 w-[375px] lg:w-[700px] -z-10"
                />
                <NavBar />
                <div className="px-8 mx-auto mt-12 xl:mt-16 md:container">
                    <>
                        <WhyMFFXHero />
                        <Parallax onEnter={() => setEntered(true)} onExit={() => setEntered(false)} opacity={[-3, 10]}>
                            <WhyMFFXShowResults entered={entered} {...mockResultData} />
                        </Parallax>
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXBenefits data={mockBenefitsData} />
                        </Parallax>
                        {/* <Parallax opacity={[-3, 10]}>
                            <WhyMFFXSuggest data={mockSuggestData} />
                        </Parallax> */}
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXWhyChose {...mockWhyChose} />
                        </Parallax>

                        {testimonials && (
                            <Parallax opacity={[-1, 10]}>
                                <HydrationProvider>
                                    <>
                                        <Client>
                                            <Testimonials testimonials={testimonials} />
                                        </Client>
                                    </>
                                </HydrationProvider>
                            </Parallax>
                        )}

                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXGetFunded
                                title="Are you ready to join our success?"
                                description="Joining an attractive prop firm can provide traders with access to greater trading capital, advanced technology, and a supportive community of experienced traders"
                            />
                        </Parallax>
                    </>
                    <Footer />
                </div>
            </div>
        </>
    );
};

import React from 'react';
import { screen, render } from '@testing-library/react';
import { unstable_createRemixStub } from '@remix-run/testing';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import {
    HowItWorksHero,
    HowItWorksProgressBar,
    HowItWorksEvaluationProcess,
    HowItWorksAccountRules,
    HowItWorksTradingObjectives,
    HowItWorksLiveAccount,
    HowItWorksPayoutSystemInfo,
} from '~/components/pages/how-it-works';

//create the mock resize observer in the ParallaxContoller
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

window.ResizeObserver = ResizeObserver;

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
    videoSrc: '/video/MFFXN.mp4',
    description:
        'Watch interviews with the most successful and emerging traders who share their own selection criteria',
};

const mockResultData = {
    activeNumber: 8135,
    totalProfilt: 13000000,
    averageProfit: 10000,
};

describe('1. HowItWorksHero testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksHero',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <HowItWorksHero />
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub initialEntries={['/HowItWorksHero']} hydrationData={{ loaderData: { '/HowItWorksHero': {} } }} />
        );

        expect(screen.getByTestId('mffx-how-it-works-hero')).toBeInTheDocument();
    });
});

describe('2. HowItWorksProgressBar testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksProgressBar',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <HowItWorksProgressBar />
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksProgressBar']}
                hydrationData={{ loaderData: { '/HowItWorksProgressBar': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-progress-bar')).toBeInTheDocument();
    });
});

describe('3. HowItWorksEvaluationProcess testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksEvaluationProcess',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-1, 10]}>
                            <HowItWorksEvaluationProcess />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksEvaluationProcess']}
                hydrationData={{ loaderData: { '/HowItWorksEvaluationProcess': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-evaluation-progress')).toBeInTheDocument();
    });
});

describe('4. HowItWorksAccountRules testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksAccountRules',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-1, 10]}>
                            <HowItWorksAccountRules />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksAccountRules']}
                hydrationData={{ loaderData: { '/HowItWorksAccountRules': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-account-rules')).toBeInTheDocument();
    });
});

describe('5. HowItWorksLiveAccount testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksLiveAccount',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-1, 10]}>
                            <HowItWorksLiveAccount />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksLiveAccount']}
                hydrationData={{ loaderData: { '/HowItWorksLiveAccount': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-live-account')).toBeInTheDocument();
    });
});

describe('6. HowItWorksTradingObjectives testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksTradingObjectives',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-1, 10]}>
                            <HowItWorksTradingObjectives />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksTradingObjectives']}
                hydrationData={{ loaderData: { '/HowItWorksTradingObjectives': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-trading-objectives')).toBeInTheDocument();
    });
});

describe('7. HowItWorksPayoutSystemInfo testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/HowItWorksPayoutSystemInfo',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-3, 10]}>
                            <HowItWorksPayoutSystemInfo />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/HowItWorksPayoutSystemInfo']}
                hydrationData={{ loaderData: { '/HowItWorksPayoutSystemInfo': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-how-it-works-payout-system-info')).toBeInTheDocument();
    });
});

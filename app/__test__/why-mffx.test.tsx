import React from 'react';
import { screen, render } from '@testing-library/react';
import { unstable_createRemixStub } from '@remix-run/testing';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import {
    WhyMFFXHero,
    WhyMFFXShowResults,
    WhyMFFXBenefits,
    WhyMFFXSuggest,
    WhyMFFXWhyChose,
    WhyMFFXTestimonials,
    WhyMFFXGetFunded,
} from '~/components/pages/why-mffx';

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

describe('1. Hero testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/hero',
                loader: () => {},
                element: <WhyMFFXHero />,
            },
        ]);

        render(<RemixStub initialEntries={['/hero']} hydrationData={{ loaderData: { '/hero': {} } }} />);

        expect(screen.getByTestId('mffx-why-mffx-hero'));
    });
});

describe('2. ShowResults testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/ShowResults',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <WhyMFFXShowResults entered={true} {...mockResultData} />
                    </ParallaxProvider>
                ),
            },
        ]);

        render(<RemixStub initialEntries={['/ShowResults']} hydrationData={{ loaderData: { '/ShowResults': {} } }} />);

        expect(screen.getByTestId('mffx-why-mffx-show-results')).toBeInTheDocument();
    });
});

describe('3. WhyMFFXBenefits testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/WhyMFFXBenefits',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXBenefits data={mockBenefitsData} />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/WhyMFFXBenefits']}
                hydrationData={{ loaderData: { '/WhyMFFXBenefits': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-why-mffx-benefits')).toBeInTheDocument();
    });
});

describe('4. WhyMFFXSuggest testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/WhyMFFXSuggest',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXSuggest data={mockSuggestData} />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub initialEntries={['/WhyMFFXSuggest']} hydrationData={{ loaderData: { '/WhyMFFXSuggest': {} } }} />
        );

        expect(screen.getByTestId('mffx-why-mffx-suggest')).toBeInTheDocument();
    });
});

describe('5. WhyMFFXWhyChose testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/WhyMFFXWhyChose',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXWhyChose {...mockWhyChose} />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/WhyMFFXWhyChose']}
                hydrationData={{ loaderData: { '/WhyMFFXWhyChose': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-why-mffx-why-chose')).toBeInTheDocument();
    });
});

describe('6. WhyMFFXTestimonials testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/WhyMFFXTestimonials',
                loader: () => {},
                element: <WhyMFFXTestimonials title="And many other reviews" />,
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/WhyMFFXTestimonials']}
                hydrationData={{ loaderData: { '/WhyMFFXTestimonials': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-why-mffx-testimonials')).toBeInTheDocument();
    });
});

describe('7. WhyMFFXGetFunded testing', () => {
    test('Rendering and section existence', () => {
        const RemixStub = unstable_createRemixStub([
            {
                path: '/WhyMFFXGetFunded',
                loader: () => {},
                element: (
                    <ParallaxProvider>
                        <Parallax opacity={[-3, 10]}>
                            <WhyMFFXGetFunded
                                title="Are you ready to join our success?"
                                description="Joining an attractive prop firm can provide traders with access to greater trading capital, advanced technology, and a supportive community of experienced traders"
                            />
                        </Parallax>
                    </ParallaxProvider>
                ),
            },
        ]);

        render(
            <RemixStub
                initialEntries={['/WhyMFFXGetFunded']}
                hydrationData={{ loaderData: { '/WhyMFFXGetFunded': {} } }}
            />
        );

        expect(screen.getByTestId('mffx-why-mffx-getfunded')).toBeInTheDocument();
    });
});

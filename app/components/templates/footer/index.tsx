import { v4 as uuidv4 } from 'uuid';

import { FooterAbout } from './footer-about';
import { FooterNavList } from './footer-nav-list';
import { FooterLinkList } from './footer-list';
import { FooterTypewriterLink } from './footer-typewriter-link';
import { FooterNavBar } from './footer-nav-bar';

const textAbout =
    'The MyFundedFX Trading Challenge is open to traders Worldwide, including the United States and Canada. One of the biggest obstacles most traders face is not having enough Trading Capital. We solve that! Take the Challenge. Pass. Get Funded!';
const navListItems = [
    {
        text: 'Testimonials',
        to: 'https://uk.trustpilot.com/review/myfundedfx.com',
        type: 'external',
    },
];
const navBarItems = [
    {
        to: '/disclaimer',
        text: 'Disclaimer',
    },
    {
        to: '/privacy-policy',
        text: 'Privacy Policy',
    },
    {
        to: '/terms',
        text: 'Terms',
    },
    {
        to: '/cancellation',
        text: 'Cancellation',
    },
];
const linkLists = [
    {
        title: 'How it works',
        list: [{ text: 'How it works', to: '/how-it-works' }],
        // list: [
        //     { text: 'item-1', to: '/item-1' },
        //     {
        //         text: 'item-2',
        //         subList: [
        //             {
        //                 text: 'sub-item-1',
        //                 to: '/sub-item-1',
        //             },
        //             {
        //                 text: 'sub-item-2',
        //                 to: '/sub-item-2',
        //             },
        //             {
        //                 text: 'sub-item-3',
        //                 to: '/sub-item-3',
        //             },
        //         ],
        //     },
        //     {
        //         text: 'item-3',
        //         subList: [
        //             {
        //                 text: 'sub-item-1',
        //                 to: '/sub-item-1',
        //             },
        //             {
        //                 text: 'sub-item-2',
        //                 to: '/sub-item-2',
        //             },
        //             {
        //                 text: 'sub-item-3',
        //                 to: '/sub-item-3',
        //             },
        //         ],
        //     },
        //     { text: 'item-4', to: '/item-4' },
        // ],
    },
    {
        title: 'About us',
        list: [{ text: 'Why MyFundedFX', to: '/why-my-funded-fx' }],
    },
];
const footerBottomText =
    'All content published and distributed by MyFundedFX LLC, MyFundedFX, and its affiliates (collectively, the “Company”) is to be treated as general information only. None of the information provided by the Company or contained herein is intended as investment advice, an offer or solicitation of an offer to buy or sell, or a recommendation, endorsement, or sponsorship of any security, company, or fund. Leveraged products such as CFD’s and Forex trading are complex instruments with a high risk of losing money. The products offered are intended for professional and retail clients. Please note that client accounts could sustain losses of deposited funds or in some cases even exceeding their deposit amount. Please note; The information on the website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation. MyFundedFX LLC is a registered entity in Texas, USA and is compliant with all necessary laws and regulations provided in accordance with local and federal jurisdictions. Copyright (c) 2022. All right Reserved. MyFundedFX LLC.';
const footerCopyRightText = '© 2022-2023 MyFundedFX. All Rights Reserved';
const footerTypeWriterStrings = ['Creative Agency', 'Digital Agency'];
const footerTypeWriterLink = 'https://netdesignr.com/';

export const Footer = () => {
    return (
        <div className="py-10 mx-auto max-w-screen-2xl xl:py-20" data-testid="mffx-footer">
            <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start max-w-screen-2xl">
                <div className="grid justify-between w-full grid-cols-2 col-span-2 gap-8 lg:justify-start lg:grid-cols-4">
                    <FooterNavList items={navListItems} />
                    <div className="grid grid-cols-1 col-span-1 gap-8 lg:col-span-3 lg:grid-cols-3">
                        {linkLists.map((list) => (
                            <FooterLinkList key={uuidv4()} {...list} />
                        ))}
                    </div>
                </div>
                <FooterAbout className="col-span-1" text={textAbout} />
            </div>
            <hr className="mt-10 xl:mt-[54px] mb-8 xl:mb-[54px] border-[#4C4E50]" />
            <div className="max-w-screen-2xl">
                <div className="flex flex-col justify-between w-full xl:flex-row">
                    <FooterNavBar items={navBarItems} />
                    <FooterTypewriterLink to={footerTypeWriterLink} strings={footerTypeWriterStrings} />
                </div>
                <div className="flex flex-col justify-between w-full xl:flex-row gap-y-4">
                    <p className="text-xs text-[#4C4E50] max-w-5xl">{footerBottomText}</p>
                    <p className="text-xs text-[#4C4E50]">{footerCopyRightText}</p>
                </div>
            </div>
        </div>
    );
};

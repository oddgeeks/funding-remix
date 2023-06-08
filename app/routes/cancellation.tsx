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
    title: 'Cancellation | Top Prop Firm | MyFundedFX',
    description:
        'Looking for complete trading flexibility? MyFundedFX offers no time limits, inactivity rules, or trading days requirements. Join us now for fast 14-day payouts and complete control over your trades!',
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

export default function Cancellation() {
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
                                    Cancellation
                                </span>
                                <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">
                                    My Funded Fx
                                </span>
                            </p>
                        </div>
                        <div className="mx-auto mt-6 prose prose-lg prose-indigo">
                            <div className="flex justify-center">
                                {' '}
                                <strong className="my-4 text-center ">
                                    {' '}
                                    REFUND AND CANCELLATION POLICY (ACCORDING TO MYFUNDEDFX TRADING CHALLENGE GENERAL
                                    TERMS AND CONDITIONS)
                                </strong>
                            </div>
                            <div className="space-y-4 ">
                                <p>GTC 12. RIGHT TO WITHDRAW FROM A CONTRACT</p>
                                <p>
                                    GTC 12.1. If you are a consumer, you have the right to withdraw from a contract
                                    without giving a reason within 14 days of its execution (see GTC clause 2.10 for
                                    details on the time of execution of the agreement). PLEASE NOTE THAT IF YOU START
                                    PERFORMING DEMO TRADES BEFORE THE EXPIRY OF THE SPECIFIED TIME LIMIT, YOU LOSE YOUR
                                    RIGHT TO WITHDRAW FROM THE CONTRACT.
                                </p>

                                <p>
                                    GTC 12.2.Your withdrawal from the contract must be sent to our email address
                                    support@Myfundedfx.com within the specified time limit. We will confirm the receipt
                                    of the withdrawal to you in text form without undue delay. If you withdraw from the
                                    contract, we will refund you without undue delay (no later than 14 days after your
                                    withdrawal from the contract) all fees we have received from you, in the same way in
                                    which you paid them.
                                </p>

                                <p>
                                    GTC 12.3. The Provider is entitled to immediately withdraw from the Contract in the
                                    case of any breach by the Customer specified in GTC Clause 10.
                                </p>

                                <p>GTC 13. DEFECTIVE PERFORMANCES</p>
                                <p>
                                    GTC 13.1. If the Services do not correspond to what was agreed or have not been
                                    provided to you, you can exercise your rights from defective performance. The
                                    Provider does not provide any guarantee for the quality of the services. You must
                                    notify us of the defect without undue delay to our email address or to our address
                                    listed in GTC clause 11.2. When exercising the rights from defective performance,
                                    you may request that we remedy the defect or provide you with a reasonable discount.
                                    If the defect cannot be remedied, you can withdraw from the contract or claim a
                                    reasonable discount.
                                </p>

                                <p>
                                    GTC 13.2. We will try to resolve any complaint you may lodge as soon as possible (no
                                    later than within 30 calendar days), and we will confirm its receipt and settlement
                                    to you in writing. If we do not settle the complaint in time, you have the right to
                                    withdraw from the contract. You can file a complaint by sending an email to our
                                    e-mail address support@Myfundedfx.com.
                                </p>

                                <p>
                                    GTC 2.6. The fee is paid for allowing you to access the Myfundedfx Trading
                                    Challenge, or the Services provided under the Myfundedfx Trading Challenge. The
                                    Customer is not entitled to a refund of the fee, for example, if the Customer
                                    cancels the Customer’s Client Section or requests the cancellation by email, if the
                                    Customer terminates the use of the Services prematurely (for example, fails to
                                    complete the Myfundedfx Trading Challenge or the Verification), fails to meet the
                                    conditions of the Myfundedfx Trading Challenge or the Verification, or violates
                                    these GTC.
                                </p>

                                <p>
                                    GTC 2.7. If the Customer lodges an unjustifiable complaint regarding the paid fee or
                                    disputes the paid fee with the Customer’s bank or payment service provider (e.g.
                                    through chargeback services, dispute services, or other similar services), on the
                                    basis of which an annulment, cancellation or refund of the fee or any part thereof
                                    is requested, the Provider is entitled, at its own discretion, to stop providing to
                                    the Customer any services and refuse any future provision of any services.
                                </p>

                                <p>
                                    GTC 2.8. Your choice of the option of the Myfundedfx Trading Challenge that you
                                    select when making an order shall also apply to the subsequent Verification. You
                                    will start the subsequent Verification and, possibly, other products related
                                    thereto, with the parameters and the same currency that correspond to the option of
                                    the Myfundedfx Trading Challenge selected by you. Once you make a selection, it is
                                    not possible to change it. If you are ordering a new Myfundedfx Trading Challenge,
                                    the restrictions specified in GTC clause 2.8 shall not apply.
                                </p>

                                <p>
                                    GTC 2.9. The Provider reserves the right to unilaterally change the fees and
                                    parameters of the Services at any time, including the parameters for their
                                    successful completion. The change does not affect the Services purchased before the
                                    change is notified.
                                </p>

                                <p>
                                    GTC 4.5. The Customer may at any time request the cancellation of the Client Section
                                    by sending an e-mail to support@Myfundedfx.com. Sending a request for the
                                    cancellation of the Client Section is considered as a request for termination of the
                                    contract by the Customer, with the Customer being no longer entitled to use the
                                    Services, including the Client Section and Trading Platform. The Provider will
                                    immediately confirm the receipt of the request to the Customer by email, whereby the
                                    contractual relationship between the Customer and the Provider will be terminated.
                                    In such a case, the Customer is not entitled to any refund of the fees already paid
                                    or costs otherwise incurred.
                                </p>

                                <p>
                                    GTC 6.1. After paying the fee for the selected option of the Myfundedfx Trading
                                    Challenge, the Customer will receive the relevant login data for the Trading
                                    Platform at the e-mail address provided by the Customer or in the Client Section.
                                    The Customer activates the Myfundedfx Trading Challenge by opening the first
                                    demotrade in the Trading Platform.
                                </p>

                                <p>
                                    IF YOU ARE A CONSUMER, YOU ACKNOWLEDGE THAT, BY OPENING THE FIRST DEMOTRADE, YOU
                                    EXPRESSLY DEMAND THE PROVIDER TO COMPLETE THE SERVICES BEFORE THE EXPIRY OF THE
                                    PERIOD FOR WITHDRAWAL FROM THE CONTRACT, WHICH AFFECTS YOUR RIGHT TO WITHDRAW FROM
                                    THE CONTRACT, AS SPECIFIED IN MORE DETAIL IN CLAUSE 12.
                                </p>

                                <p>
                                    If you do not activate the Myfundedfx Trading Challenge within 30 calendar days of
                                    the date on which it was made available to you, your access to it will be suspended.
                                    You can request the renewal of access via the Client Section or by sending an e-mail
                                    to support@Myfundedfx.com within 6 months of the initial suspension, otherwise we
                                    will terminate the provision of the Services without any right to a refund of the
                                    fee. The Myfundedfx Trading Challenge lasts for 30 calendar days from the date of
                                    its activation.
                                </p>

                                <p>GTC 15. OUT-OF-COURT CONSUMER DISPUTE SETTLEMENT</p>
                                <p>
                                    GTC 15.1. It is our objective that our customers are satisfied with the MyFundedFX
                                    LLC services; therefore, if you have any complaints or suggestions, we will be happy
                                    to resolve them directly with you and you can contact us at our e-mail address or at
                                    our address listed in GTC clause 11.2.
                                </p>

                                <p>
                                    GTC 15.2. This section 15.2 applies only to a consumer who is at the same time an US
                                    resident. The Dallas County Dispute Resolution Center, with its registered office at
                                    100 Crescent Court Suite 700 Dallas, TX 75201, United States, website: LINK, is
                                    responsible for the out-of-court settlement of consumer disputes. You can also use
                                    the platform at the following website to resolve disputes online: LINK.
                                </p>
                                <ul>
                                    <li>TRADING CHALLENGE</li>
                                    <li>Knowledge Base</li>
                                    <li>Programs & Profit Share</li>
                                    <li>Detailed Rules & Objectives</li>
                                    <li>Platform & Instruments</li>
                                    <li>Refund and Cancellation Policy</li>
                                    <li>Tools & Platforms</li>
                                    <li>Myfundedfx Trader Area</li>
                                    <li>Leaderboard</li>
                                    <li>Economic Calendar</li>
                                    <li>About Myfundedfx</li>
                                    <li>About Us</li>
                                    <li>Partners</li>
                                    <li>Jobs & Business Opportunities</li>
                                    <li>Affiliates</li>
                                    <li>Investors</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>QUALITY BADGE</li>
                                    <li>Company Info</li>
                                    <li>MyFundedFX LLC</li>
                                    <li>100 Crescent Court, Suite 700</li>
                                    <li>Dallas, TX 75201, United States</li>
                                    <li>TIN No. 86-2548217</li>
                                </ul>
                                <a href="www.Myfundedfx.com" className="text-indigo-500 ">
                                    www.Myfundedfx.com
                                </a>
                                <div>
                                    <p>OPENING HOURS::</p>
                                    <p>Mon – Fri: 24h</p>
                                    <p>Sun: Closed</p>
                                    <div>
                                        <p>Customer Support:</p>
                                        <p>Email: support(at)Myfundedfx.com</p>
                                    </div>
                                </div>
                                <div>
                                    {' '}
                                    <strong>Passion for Trading</strong>
                                    <p>
                                        Myfundedfx is the trading name of MyFundedFX LLC, United States. Myfundedfx.com
                                        and my.challenge.Myfundedfx.com is owned and operated by MyFundedFX LLC,
                                        registered office at 2112 Boll Street Unit 233, Dallas, Texas 75204, United
                                        States (TIN No. 86-2548217) All content published and distributed by MyFundedFX
                                        LLC and its affiliates (collectively, the “Company”) is to be treated as general
                                        information only. None of the information provided by the Company or contained
                                        herein is intended as (a) investment advice, (b) an offer or solicitation of an
                                        offer to buy or sell, or (c) a recommendation, endorsement, or sponsorship of
                                        any security, company, or fund. Testimonials appearing on the Company’s websites
                                        may not be representative of other clients or customers and is not a guarantee
                                        of future performance or success. Use of the information contained on the
                                        Company’s websites is at your own risk and the Company and its partners,
                                        representatives, agents, employees, and contractors assume no responsibility or
                                        liability for any use or misuse of such information. Trading in financial
                                        markets is a high-risk activity and it is advised not to risk more than one can
                                        afford to lose! MyFundedFX LLC does not provide any of the investment services
                                        listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information
                                        on this site is not directed at residents in any country or jurisdiction where
                                        such distribution or use would be contrary to local laws or regulations.
                                        Myfundedfx is not a broker and do not accept deposits. ©2022 All Rights Reserved
                                        by MyFundedFX LLC
                                    </p>
                                </div>
                            </div>
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

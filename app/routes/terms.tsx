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
    title: 'Terms | Top Prop Firm | MyFundedFX',
    description:
        'Trade on your terms with MyFundedFX! Enjoy complete trading control with no time limits, inactivity rules, or trading days requirements. Join us now for fast 14-day payouts!',
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

export default function Terms() {
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
                                    General Terms and Conditions
                                </span>
                                <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">
                                    My Funded Fx
                                </span>
                            </p>
                            <p className="mt-4 mb-2 text-2xl">General Terms and Conditions</p>
                            <p className="text-xl leading-8 ">
                                These MYFUNDEDFX General Terms and Conditions (the “GTC”) govern rights and obligations
                                in connection with the use of services provided by MyFundedFX LLC (United States) (the
                                “Services”), offered mainly through the myfundedfx.com website (the “Website”). Please
                                read these GTC carefully. You are under no obligation to use the Services if you do not
                                agree or understand any portion of these Terms, nor should you use the Services unless
                                you understand and agree to these Terms.
                            </p>
                        </div>
                        <div className="mx-auto mt-6 prose prose-lg prose-indigo">
                            <p className="mt-4 text-2xl font-medium">1. INTRODUCTORY PROVISIONS</p>
                            <div className="space-y-4">
                                <p className="mt-2">
                                    1.1. These GTC govern your (“you”, “your”,or the “Customer”) rights and obligations
                                    in connection with the use of the Services provided by MyFundedFX LLC (TIN No.
                                    86-2548217), with its registered office at 100 Crescent Court Suite 700 Dallas, TX
                                    75201, United States (“we”, “our”, or the “Provider”).
                                </p>
                                <p>
                                    1.2. By registering on the Website or, where registration is not required, not later
                                    than by your first use of the Services, you are entering into a contract with the
                                    Provider, the subject of which is the provision of the Services of your choice. The
                                    GTC form an integral part of such a contract and, by executing the contract with the
                                    Provider, you express your agreement to these GTC.
                                </p>
                                <p>
                                    1.3. The Services are only intended for persons over the age of 18 residing in the
                                    country for which the Services are available. By registering on the Website, you
                                    confirm that you are over 18 years of age. If you are under 18 years of age, you may
                                    not use the Services. You undertake to access the Services solely from one of the
                                    countries for which the Services are available. You acknowledge that your access to
                                    and use of the Services may be restricted or prohibited by law in some countries,
                                    and you undertake to only access and use the Services in accordance with applicable
                                    laws.
                                </p>{' '}
                                <p>
                                    1.4. The Services consist of the provision of tools for simulated foreign exchange
                                    trading on the FOREX market or trading with other instruments on other financial
                                    markets, provision of analytical tools, training and educational materials, and
                                    other ancillary services,in particular through the Client Section or by the
                                    provision of access to applications provided by the Provider or third parties.
                                    Financial market information is used in the simulated trading; however, you
                                    acknowledge that any trading that you perform through the Services is not real. You
                                    also acknowledge that the funds provided to you for demo trading are fictitious and
                                    that you have no right to possess those fictitious funds beyond the scope of their
                                    use within the Services, and in particular that they may not be used for any actual
                                    trading and that you are not entitled to the payment of those funds. Unless
                                    expressly agreed otherwise, you will not be paid any remuneration or profits based
                                    on the results of your simulated trading, nor will you be required to pay any
                                    losses.
                                </p>{' '}
                                <p>
                                    1.5. None of the services provided to you by the provider can be considered
                                    investment services in accordance with applicable laws. The provider does not give
                                    or provide to you any guidance, instructions, or information about how or in which
                                    manner you should perform transactions when using the services or otherwise, or any
                                    other similar information about the investment tools traded, nor does the provider
                                    accept any such guidance, instructions, or information from you. None of the
                                    services constitute investment advice or recommendations. No employees, staff, or
                                    representatives of the provider are authorized to provide investment advice or
                                    recommendations. Should any information or statement of any employee, staff, or
                                    representatives of the provider be interpreted as investment advice or
                                    recommendations, the provider explicitly disclaims that the same is investment
                                    advice or recommendations and shall not be responsible for them.
                                </p>
                                <p>1.6. Your personal data is processed in accordance with the Privacy Policy.</p>
                                <p>
                                    1.7. The meaning of the definitions, expressions,and abbreviations used in these GTC
                                    can be found in clause 18.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-4 text-2xl font-medium">2. SERVICES AND THEIR ORDER</p>
                                <p className="mt-2">
                                    2.1. You can order the Services through the Website by completing the appropriate
                                    registration or order form. After registration, we will email you the login details
                                    for the Client Section and/or Trading Platform and allow you to access them.
                                </p>
                                <p>
                                    2.2. The Services include, among other things, the Free Trial, Myfundedfx Trading
                                    Challenge, and Verification products; these products may differ in the scope of the
                                    Services provided (e.g., by analytical tools available to the Customer). With the
                                    Free Trial, you may use some of the Services within a limited options for 3rd party
                                    brokerage and trading platforms, scope and for a limited period of time free of
                                    charge. Completing the Free Trial does not entitle you to access any other Services.
                                </p>
                                <p>
                                    2.3. All data that you provide to us through the registration or order form, the
                                    Client Section,or otherwise must be complete, true, and up-to-date. You must
                                    immediately notify us of any change in your data or update the data in your Client
                                    Section. The Customer is responsible for all the provided data being accurate and
                                    up-to-date; the Provider is not obligated to verify the data.
                                </p>{' '}
                                <p>
                                    2.4. You acknowledge that if you provide an identification number, tax registration
                                    number or other similar information in the registration or order form or in the
                                    Client Section, or if you state that you are a legal entity, you will be considered
                                    as an entrepreneur(trader) for the purposes of these GTC and when using the
                                    Services, and the provisions of these GTC or the applicable law that grant rights to
                                    consumers will not apply to you.
                                </p>{' '}
                                <p>
                                    2.5. The fee for the Myfundedfx Trading Challenge varies according to the option
                                    selected and depends on the amount of the initial capital, the degree of the
                                    acceptable risk, the parameters that must be fulfilled so that the conditions of the
                                    Myfundedfx Trading Challenge and the subsequent Verification are met, and possibly
                                    other configurations. More detailed information on individual options and fees for
                                    those options are provided on our Website here myfundedfx.com and on the Client
                                    Section. The final fee will be determined based on the option you select when
                                    completing the form for ordering the Myfundedfx Trading Challenge. The Provider
                                    reserves the right to also provide the Services under individually agreed
                                    conditions. All individually agreed conditions shall be determined by the Provider
                                    at its own discretion. Individual discounts and other benefits may not be combined,
                                    unless expressly stipulated otherwise by the Provider.
                                </p>
                                <p>
                                    2.6. The fee is paid for allowing you to access the Myfundedfx Trading Challenge, or
                                    the Services provided under the Myfundedfx Trading Challenge. The Customer is not
                                    entitled to a refund of the fee, for example, if the Customer cancels the Customer’s
                                    Client Section or requests the cancellation by email, if the Customer terminates the
                                    use of the Services prematurely (for example, fails to complete the Myfundedfx
                                    Trading Challenge or the Verification), fails to meet the conditions of the
                                    Myfundedfx Trading Challenge or the Verification, or violates these GTC.
                                </p>
                                <p>
                                    2.7. If the Customer lodges an unjustifiable complaint regarding the paid fee or
                                    disputes the paid fee with the Customer’s bank or payment service provider (e.g.
                                    through chargeback services, dispute services, or other similar services), on the
                                    basis of which an annulment, cancellation or refund of the fee or any part thereof
                                    is requested, the Provider is entitled, at its own discretion, to stop providing to
                                    the Customer any services and refuse any future provision of any services.
                                </p>
                                <p>
                                    2.8. Your choice of the option of the Myfundedfx Trading Challenge that you select
                                    when making an order shall also apply to the subsequent Verification. You will start
                                    the subsequent Verification and, possibly, other products related thereto, with the
                                    parameters and the same currency that correspond to the option of the Myfundedfx
                                    Trading Challenge selected by you. Once you make a selection, it is not possible to
                                    change it. If you are ordering a new Myfundedfx Trading Challenge, the restrictions
                                    specified in clause 2.8 shall not apply.
                                </p>{' '}
                                <p>
                                    2.9. The Provider reserves the right to unilaterally change the fees and parameters
                                    of the Services at any time, including the parameters for their successful
                                    completion. The change does not affect the Services purchased before the change is
                                    notified.
                                </p>
                                <p>
                                    2.10. Any data entered in the order form can be checked, corrected, and amended
                                    until the binding order of the Services. The order of the Services of your choice is
                                    made by submitting the order form. The Provider will immediately confirm the receipt
                                    of your order to your email address. In the case of the Myfundedfx Trading
                                    Challenge, the order is completed upon the payment of the fee for the selected
                                    option (more on this in clause 3.4), whereby the contract between you and the
                                    Provider is executed, the subject of which is the provision of the Myfundedfx
                                    Trading Challenge and, if the conditions of the Myfundedfx Trading Challenge are
                                    met, the Verification. The contract is concluded in English. We archive the contract
                                    in electronic form and do not allow access to it. You acknowledge that in order to
                                    use our Services, you must obtain the appropriate technical equipment and software,
                                    including third-party software (e.g.software for the use of the Trading Platform),
                                    at your own risk and expense. The Website is accessible from the most commonly used
                                    web browsers. The internet access, purchase of the equipment,and purchase of the web
                                    browser and its updates are at your own risk and expense. The Provider does not
                                    warrant or guarantee that the Services will be compatible with any specific
                                    equipment or software. The Provider does not charge any additional fees for the
                                    internet connection.
                                </p>
                                <p>
                                    2.12. You acknowledge that the operators of trading platforms are persons or
                                    entities different from the Provider and that their own terms and conditions and
                                    privacy policies will apply when you use their services and products. Before sending
                                    an order form, you are obligated to read those terms and conditions and privacy
                                    policies.
                                </p>
                                <p>
                                    2.13. If the Customer places an unusually large number of orders for the Services
                                    within an unreasonably short period of time, the Provider may notify the Customer
                                    through the Client Section or email as a protective precaution to mitigate
                                    potentially harmful or gambling behaviour of the Customer. If such unreasonable
                                    behaviour continues after such notice, we reserve the right to suspend any further
                                    orders of the Services by the Customer. If we identify that the unusual behaviour as
                                    per this paragraph relates to the Customer’s involvement in Forbidden Trading
                                    Practices, we may take respective actions as perceived in Section 5 of this GTC. The
                                    Provider reserves the right to determine, at its own discretion, the nature of the
                                    behaviour described above and reasonable boundaries for such determination.
                                </p>
                                <p></p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">3. PAYMENT TERMS</p>
                                <p className="mt-2">
                                    3.1. The amounts of fees for the Myfundedfx Trading Challenge options are in USD.
                                    The fee can also be paid in other currencies that are listed on the Website. The
                                    Customer acknowledges that if the payment is made in a currency other than the one
                                    the Customer has chosen on the Website, the amount will be converted according to
                                    the current exchange rates valid at the time of payment.
                                </p>
                                <p>
                                    3.2. Service charges are inclusive of all taxes. If the Customer is an
                                    entrepreneur(trader), he is obliged to fulfill all his tax obligations in connection
                                    with the use of our Services in accordance with applicable law, and in the event of
                                    an obligation, he is obliged to pay tax or other fees properly.
                                </p>
                                <p>
                                    3.3. You can pay the fee for the selected option of the Myfundedfx Trading Challenge
                                    by a payment card, cryptocurrency or using other means of payment that the Provider
                                    currently offers on the Website.
                                </p>{' '}
                                <p>
                                    3.4. In the event of payment by a payment card or via any other express payment
                                    method, the payment shall be made immediately. The fee is considered paid when its
                                    full amount is credited to the Provider’s account. If you do not pay the amount on
                                    time, the Provider is entitled to cancel your order. Customer bears all fees charged
                                    to Customer by the selected payment service provider (according to the valid price
                                    list of the payment services provider) in connection with the transaction and the
                                    Customer is obliged to ensure that the respective fee for the selected Myfundedfx
                                    Trading Challenge is paid in full.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">4. CLIENT SECTION</p>
                                <p className="mt-2">
                                    4.1. Only one Client Section is permitted per Customer and all of the Customer’s
                                    Services must be maintained in the Client Section.
                                </p>
                                <p>
                                    4.2. The total number of Myfundedfx Trading Challenges and Verifications per one
                                    Client Section may be limited depending on the total sum of the initial capital
                                    amounts of the products ordered by the Customer or on the basis of other parameters.
                                    Unless the Provider grants an exception to the Customer, the initial capital amounts
                                    may not be transferred between the individual products or mutually combined. You may
                                    also not transfer or combine your performance, Service parameters, data or any other
                                    information between the products.
                                </p>
                                <p>
                                    4.3. Access to the Client Section and Trading Platform is protected by login data,
                                    which the Customer may not make available or share with any third party. If the
                                    Customer has registered as a legal entity, the Customer may allow the use of the
                                    Services through the Customer’s Client Section to the Customer’s employees or other
                                    authorized employees and representatives. The Customer is responsible for all
                                    activities that are performed through the Customer’s Client Section or Trading
                                    Platform. The Provider bears no responsibility, and the Customer is not entitled to
                                    any compensation, for any misuse of the Client Section, Trading Platform,or any part
                                    of the Services, nor is the Provider responsible for any negative consequences
                                    thereof for the Customer, if such misuse occurs for any reasons on the part of the
                                    Customer.
                                </p>{' '}
                                <p>
                                    4.4. The Customer acknowledges that the Services may not be available around the
                                    clock, particularly with respect to maintenance, upgrades, or any other reasons. In
                                    particular, the Provider bears no responsibility, and the Customer is not entitled
                                    to any compensation, for the unavailability of the Client Section or Trading
                                    Platform and for damage or loss of any data or other content that you upload,
                                    transfer or save through the Client Section or Trading Platform.
                                </p>
                                <p>
                                    {' '}
                                    4.5. The Customer may at any time request the cancellation of the Client Section by
                                    sending an e-mail to support@Myfundedfx.com. Sending a request for the cancellation
                                    of the Client Section is considered as a request for termination of the contract by
                                    the Customer, with the Customer being no longer entitled to use the Services,
                                    including the Client Section and Trading Platform. The Provider will immediately
                                    confirm the receipt of the request to the Customer by email, whereby the contractual
                                    relationship between the Customer and the Provider will be terminated. In such a
                                    case, the Customer is not entitled to any refund of the fees already paid or costs
                                    otherwise incurred.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">5. RULES OF DEMO TRADING</p>
                                <p className="mt-2">
                                    5.1. During the demo trading on the Trading Platform, you may perform any
                                    transactions, unless these constitute forbidden trading strategies or practices
                                    within the meaning of clause 5.4. You also agree to follow good market standard
                                    rules and practices for trading on financial markets (e.g. risk management rules).
                                    Restrictions may also be imposed by the trading conditions of the Trading Platform
                                    that you have selected for trading.
                                </p>
                                <p>
                                    5.2. You acknowledge that the Provider has access to information about the demo
                                    trades that you perform on the Trading Platform. You grant the Provider your consent
                                    to share this information with persons/entities who are in a group with the Provider
                                    or who are otherwise affiliated with the Provider, and you grant the Provider and
                                    these persons/entities your consent and authorization to handle this information at
                                    their own will. You agree that these activities may be performed automatically
                                    without any further consent, consultation, or approval on your part being necessary,
                                    and that you are not entitled to any remuneration or revenue associated with the use
                                    of the data by the Provider. The Provider is aware that you do not provide the
                                    Provider with any investment advice or recommendations through your demotrading. You
                                    acknowledge that you may suspend your demo trading on the Trading Platform at any
                                    time.
                                </p>
                                <p>
                                    5.3. The Provider bears no responsibility for the information displayed on the
                                    Trading Platform, nor for any interruption of, or delay or inaccuracy in the market
                                    information displayed through your Client Section.
                                </p>{' '}
                                <p>
                                    5.4. FORBIDDEN TRADING PRACTICES 5.4.1. During the demotrading, it is prohibited to:
                                    a) knowingly or unknowingly use trading strategies that exploit errors in the
                                    services such as errors in display of prices or delay in their update; b) perform
                                    trades using an external or slow data feed; c) perform, alone or in concert with any
                                    other persons, including between connected accounts, or accounts held with different
                                    Myfundedfx entities, trades or combinations of trades the purpose of which is to
                                    manipulate trading, for example by simultaneously entering into opposite positions;
                                    d) perform trades in contradiction with the terms and conditions of the provider and
                                    the trading platform; e) use any software, artificial intelligence, ultra-high
                                    speed, or mass data entry which might manipulate, abuse, or give you an unfair
                                    advantage when using our systems or services; or f) otherwise perform trades in
                                    contradiction with how trading is actually performed in the Forex market or in any
                                    other financial market, or in a way that establishes justified concerns that the
                                    provider might suffer financial or other harm as a result of the customer’s
                                    activities. 5.4.2. The Provider reserves the right to determine, at its own
                                    discretion, whether certain trades, practices, strategies or situations are
                                    Forbidden Trading Practices.
                                </p>
                                <p>
                                    5.5. If the Customer engages in any of the Forbidden Trading Practices described in
                                    clause 5.4, (i) the Provider may consider it as a failure to meet the conditions of
                                    the particular Myfundedfx Trading Challenge or Verification, (ii) the Provider may
                                    remove the transactions that violate the prohibition from the Customer’s trading
                                    history and/or not count their results in the profits and/or losses achieved by the
                                    demo trading, or (iii) to immediately cancel all Services provided to the Customer
                                    and subsequently terminate this Agreement.
                                </p>
                                <p>
                                    5.6. In case when some or all Forbidden Trading Practices are executed on one or
                                    more Myfundedfx Trading Challenge and Verification accounts of one Customer, or
                                    accounts of various Customers, or by combining trading through Myfundedfx Trading
                                    Challenge and Verification accounts and Myfundedfx Trader accounts, then the
                                    Provider is entitled to cancel all Services and terminate all respective contracts
                                    related to any and all Customer’s Myfundedfx Trading Challenge and Verification
                                    accounts.The Provider may exercise any and all actions in Clauses 5.5 and 5.6 at its
                                    own discretion.
                                </p>
                                <p>
                                    5.7. If any Myfundedfx Trader accounts were used for or were involved in the
                                    Forbidden Trading Practices, this may and will constitute a breach of respective
                                    terms and conditions for the Myfundedfx Trader account with third-party provider and
                                    may result in cancellation of all such user accounts and termination of respective
                                    agreements by the third-party provider.
                                </p>
                                <p>
                                    5.8. If the Customer engages in any of the practices described in clause 5.4
                                    repeatedly, and the Provider has previously notified the Customer thereof, the
                                    Provider may prevent the Customer from accessing all Services or their parts,
                                    including access to the Client Section and Trading Platform, without any
                                    compensation. In such a case, the Customer is not entitled to a refund of the fees
                                    paid.
                                </p>
                                <p>
                                    5.9. The Provider does not bear any responsibility for trading or other investment
                                    activities performed by the Customer outside the relationship with the Provider, for
                                    example by using data or other information from the Client Section, Trading
                                    Platform,or otherwise related to the Services in real trading on financial markets,
                                    not even if the Customer uses for such trading the same Trading Platform that the
                                    Customer uses for demo trading.
                                </p>
                                <p>
                                    5.10. Developments in financial markets are subject to frequent and abrupt changes.
                                    Trading on financial markets may not be profitable and can lead to significant
                                    financial losses. Any previous performances and profits of the customer’s demo
                                    trading are not a guarantee or indication of any further performance.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">
                                    6. MYFUNDEDFX TRADING CHALLENGE AND VERIFICATION
                                </p>
                                <p className="mt-2">
                                    6.1. After paying the fee for the selected option of the Myfundedfx Trading
                                    Challenge, the Customer will receive the relevant login data for the Trading
                                    Platform at the e-mail address provided by the Customer or in the Client Section.
                                    The Customer activates the Myfundedfx Trading Challenge by opening the first
                                    demotrade in the Trading Platform.
                                </p>
                                <p>
                                    6.2. In order for the Customer to meet the conditions of the Myfundedfx Trading
                                    Challenge, the Customer must fulfill all of the following parameters at the same
                                    time by the end of the Myfundedfx Trading Challenge:
                                </p>
                                <p>
                                    6.2.1. During the Myfundedfx Trading Challenge, the Customer has opened at least one
                                    demotrade; 6.2.2. In the course of none of the calendar days during the Myfundedfx
                                    Trading Challenge did the Customer report a loss on any demotrades opened and closed
                                    on that day, which would exceed the percentage of the initial capital for the
                                    respective option.
                                </p>{' '}
                                <p>
                                    6.3. If the Customer has met the conditions of the Myfundedfx Trading Challenge
                                    specified in clause 6.2, and at the same time has not violated these GTC, in
                                    particular the rules of demo trading under clause 5.4, the Provider will evaluate
                                    the Myfundedfx Trading Challenge as successful and will make the Verification
                                    available to the Customer free of charge by sending login details to the Customer’s
                                    e-mail address or Client Section. The Customer may request the evaluation of the
                                    Myfundedfx Trading Challenge at any time by sending a request to
                                    support@Myfundedfx.com or via the Client Section. The Provider does not have to
                                    evaluate the Myfundedfx Trading Challenge if the Customer has not closed all trades.
                                </p>
                                <p>
                                    6.4. The Customer activates the Verification by opening the first demotrade in the
                                    Trading Platform.
                                </p>
                                <p>
                                    6.5. In order for the Customer to meet the conditions of the Verification, the
                                    Customer must fulfill all of the following parameters at the same time by the end of
                                    the Verification:
                                </p>
                                <p>
                                    6.5.1. During the Verification, the Customer has opened at least one demo trade;
                                    6.5.2. in the course of none of the calendar days during the Verification did the
                                    Customer report a loss on any demotrades opened and closed on that day, which would
                                    exceed the percentage of the initial capital for the respective option. The above
                                    parameters are explained in more detail on the myfundedfx.com Website and Client
                                    section
                                </p>
                                <p>
                                    6.6. For the Customer to meet conditions of the Verification, the Customer shall
                                    comply with the following: 6.6.1. Customer has met the conditions of the
                                    Verification Specified in clause 6.5;
                                </p>
                                <p>
                                    6.6.2. Customer has not violated these GTC, in particular, the rules of demo trading
                                    under clause 5.4; and 6.6.3. Customer has not exceeded the maximum total amount of
                                    the capital allocation of USD 300,000 individually or in combination, per Customer,
                                    within the meaning of applicable Myfundedfx Trader Program agreement, if The
                                    Customer is already participating in the Myfundedfx Trader Program.
                                </p>
                                <p>
                                    6.7. If during the Myfundedfx Trading Challenge the Customer does not comply with
                                    some of the conditions specified in clause 6.2, the Myfundedfx Trading Challenge
                                    will be evaluated as unsuccessful and the Customer will not be allowed access to the
                                    subsequent Verification. If during the Verification the Customer does not comply
                                    with any of the conditions specified in clause 6.5, the Verification will be
                                    evaluated as unsuccessful and the Customer will not be recommended as a candidate
                                    for the Myfundedfx Trader Program. In such cases, the Customer’s account and
                                    Services will be cancelled without refund of fees already paid.
                                </p>
                                <p>
                                    6.8. Provider recommending Customer as a candidate for the Myfundedfx Trader Program
                                    in no way guarantees Customer’s acceptance into the Myfundedfx Trader Program. The
                                    Provider is not responsible for Customer being rejected by the Myfundedfx Trader
                                    Program for any or no reason.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">7. MYFUNDEDFX TRADER</p>
                                <p className="mt-2">
                                    If the Customer is successful in both the Challenge and Verification, the Customer
                                    may be offered a contract by a third-party company, in its sole discretion to
                                    participate in the Myfundedfx Trader Program. The terms, conditions, and agreement
                                    between the Customer and a third-party company are strictly between the Customer and
                                    the third-party company. MyFundedFX LLC (United States) is in no way involved with
                                    the Myfundedfx Trader Program agreement — or lack thereof — executed between the
                                    third-party company and the Customer.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">
                                    8. USE OF THE WEBSITE, SERVICES AND OTHER CONTENT
                                </p>
                                <p className="mt-2">
                                    8.1. The Website and all Services, including the Client Section, their appearance
                                    and all applications, data, information, multimedia elements such as texts,
                                    drawings, graphics, design, icons, images, audio and video samples,and any other
                                    content that may form the Website and the Services (collectively as the “Content”),
                                    are subject to legal protection pursuant to copyright laws and other legal
                                    regulations and are the property of the Provider or the Provider’s licensors. The
                                    Provider grants you limited, non-exclusive, non-transferable, non-assignable,
                                    non-passable, and revocable permission to use the Content for the purpose of using
                                    the Services for your personal use and in accordance with the purpose for which the
                                    Services are provided. The Content is not sold or otherwise transferred to you and
                                    remains the property of the Provider or the Provider’s licensors.
                                </p>
                                <p>
                                    8.2. All trademarks, logos, trade names, and other designations are the property of
                                    the Provider or Provider’s licensors and the Provider does not grant you any
                                    authorization to use them.
                                </p>
                                <p>
                                    8.3. Both the Customer and the Provider undertake to act in accordance with the
                                    principles of fair dealing in the performance of the contract and in mutual
                                    negotiations and, in particular, not to damage the good reputation and legitimate
                                    interests of the other party. The Customer and the Provider will resolve any
                                    possible disagreements or disputes between them in accordance with these GTC and the
                                    applicable law.
                                </p>
                                <p>
                                    8.4. Except for the rights expressly set out in these GTC, the Provider does not
                                    grant you any other rights relating to the Services and other Content. You may only
                                    use the Services and other Content as set out in these GTC.
                                </p>{' '}
                                <p>
                                    8.5. When accessing the Services and other Content, the following is prohibited:
                                    8.5.1. to use any tools that may adversely affect the operation of the Website and
                                    Services or that would be intended to take advantage of errors, bugs or other
                                    deficiencies of the Website and Services
                                </p>
                                <p>
                                    8.5.2. to circumvent geographical restrictions of availability or any other
                                    technical restrictions;
                                </p>
                                <p>
                                    8.5.3.to make copies or back-ups of the Website and other Content; 8.5.4. to
                                    reverse-engineer, decompile, disassemble or otherwise modify the Website and other
                                    Content; 8.5.5. to sell, rent, lend, license, distribute, reproduce, spread, stream,
                                    broadcast or use the Services or other Content otherwise than as permitted; 8.5.6.
                                    to use automated means to view, display or collect information available through the
                                    Website or Services; and 8.5.7. to use any other tools or means the use of which
                                    could cause any damage to the Provider. 8.6. The provisions of clause 8 are not
                                    intended to deprive the Customer of the Customer’s consumer rights which cannot be
                                    excluded by law.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">9. DISCLAIMER</p>
                                <p className="mt-2">
                                    9.1. You acknowledge that the services and other content are provided “as is” with
                                    all their errors, defects and shortcomings, and that their use is at your sole
                                    responsibility and risk. To the maximum extent permitted by the mandatory laws, the
                                    provider disclaims any statutory, contractual, express and implied warranties of any
                                    kind, including any warranty of quality, merchantability, fitness for a particular
                                    purpose, or non-infringement of any rights.
                                </p>
                                <p>
                                    9.2. To the extent permitted by the mandatory provisions of the applicable laws, the
                                    provider is not responsible for any harm, including any indirect, incidental,
                                    special, punitive or consequential damages, including lost profit, loss of data,
                                    personal or other non-monetary harm or property damage caused as a result of use of
                                    the services or reliance on any tool, functionality, information or any other
                                    content available in connection with the use of the services or elsewhere on the
                                    website. The provider is not responsible for any products, services, applications or
                                    other third-party content that the customer uses inconnection with the services. In
                                    case the provider’s liability is inferred inconnection with the operation of the
                                    website or provision of the services by a court of justice or any other competent
                                    authority, this liability shall be limited to the amount corresponding to the fee
                                    paid by the customer for the services in connection with which the customer has
                                    incurred the loss.
                                </p>
                                <p>
                                    9.3. The Provider reserves the right to modify, change, replace, add, or remove any
                                    elements and functions of the Services at any time without any compensation.
                                </p>
                                <p>
                                    9.4. The Provider is not responsible for its failure to provide the purchased
                                    Services if that failure occurs due to serious technical or operational reasons
                                    beyond the Provider’s control, in the case of any crisis or imminent crisis, natural
                                    disaster, war, insurrection, pandemic, a threat to a large number of people or other
                                    force majeure events, and/or if the Provider is prevented from providing the
                                    Services as a result of any obligations imposed by law or a decision of a public
                                    authority.
                                </p>{' '}
                                <p>
                                    9.5. The provisions of Clause 9 are not intended to deprive the Customer of the
                                    Customer’s consumer or other rights that cannot be excluded by law.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">10. COMMUNICATION</p>
                                <p className="mt-2">
                                    10.1.You acknowledge that all communication from the Provider or its partners in
                                    connection with the provision of Services will take place through the Client Section
                                    or your email address, which you register with us. Written electronic communication
                                    by email, Live Chat or through the Client Section is also considered to be written
                                    communication.
                                </p>
                                <p>
                                    10.2. Our contact e-mail address is support@Myfundedfx.com and our contact address
                                    is 100 Crescent Court Suite 700 Dallas, TX 75201, United States.
                                    <br></br>
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">11. VIOLATION OF THE GTC</p>
                                <p className="mt-2">
                                    11.1. If the customer violates any provision of these GTC in a manner that may cause
                                    any harm to the provider, in particular, if the customer accesses the services in
                                    conflict with clause 1.3, if the customer provides incomplete, untrue or non-updated
                                    information in conflict with clause 2.3, if the customer acts in a manner that may
                                    damage the provider’s good reputation, if the customer violates the demo trading
                                    rules pursuant to clause 5.4, if the customer acts in conflict with clause 8.3,
                                    and/or if the customer performs any of the activities referred to in clause 8.5, the
                                    provider may prevent the customer from ordering any other services and completely or
                                    partially restrict the customer’s access to all or only some services, including
                                    access to the client section and trading platform, without any prior notice and
                                    without any compensation.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="mt-5 text-2xl font-medium">11. VIOLATION OF THE GTC</p>
                                <p className="mt-2">
                                    12. RIGHT TO WITHDRAW FROM A CONTRACT 12.1. If you are a consumer, you have the
                                    right to withdraw from a contract without giving a reason within 14 days of its
                                    execution (see clause 2.10 for details on the time of execution of the agreement).
                                    Please note that if you start performing demo trades before the expiry of the
                                    specified time limit, you lose your right to withdraw from the contract.
                                </p>
                            </div>
                            <div className="my-4">
                                12.2.Your withdrawal from the contract must be sent to our email address
                                support@Myfundedfx.com within the specified time limit. We will confirm the receipt of
                                the withdrawal to you in text form without undue delay. If you withdraw from the
                                contract, we will refund you without undue delay (no later than 14 days after your
                                withdrawal from the contract) all fees we have received from you, in the same way in
                                which you paid them.
                            </div>
                            <p>
                                12.3. The Provider is entitled to immediately withdraw from the Contract in the case of
                                any breach by the Customer specified in Clause 10.
                            </p>

                            <div className="mt-8">
                                <p>DEFECTIVE PERFORMANCES</p>
                                <p>
                                    13.1. If the Services do not correspond to what was agreed or have not been provided
                                    to you, you can exercise your rights from defective performance. The Provider does
                                    not provide any guarantee for the quality of the services. You must notify us of the
                                    defect without undue delay to our email address or to our address listed in clause
                                    11.2. When exercising the rights from defective performance, you may request that we
                                    remedy the defect or provide you with a reasonable discount. If the defect cannot be
                                    remedied, you can withdraw from the contract or claim a reasonable discount.
                                </p>
                                <p>
                                    13.2. We will try to resolve any complaint you may lodge as soon as possible (no
                                    later than within 30 calendar days), and we will confirm its receipt and settlement
                                    to you in writing. If we do not settle the complaint in time, you have the right to
                                    withdraw from the contract. You can file a complaint by sending an email to our
                                    e-mail address support@Myfundedfx.com.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p>CHANGES TO THE GTC</p>
                                <p>
                                    14.1.The Provider reserves the right to change these GTC at any time with immediate
                                    effect for new customers and new orders of the Services placed by existing
                                    Customers. The Provider will notify existing Customers of the change to the GTC via
                                    the Client Section or by email. The Myfundedfx Trading Challenge and the subsequent
                                    Verification are provided throughout the period of their duration pursuant to the
                                    version of the GTC which was valid and effective at the time at which the relevant
                                    Myfundedfx Trading Challenge was ordered.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p>15. OUT-OF-COURT CONSUMER DISPUTE SETTLEMENT</p>
                                <p>
                                    15.1. It is our objective that our customers are satisfied with the MyFunded FX LLC
                                    services; therefore, if you have any complaints or suggestions, we will be happy to
                                    resolve them directly with you and you can contact us at our e-mail address or at
                                    our address listed in clause 11.2.
                                </p>
                                <p>
                                    This section 15.2 applies only to a consumer who is at the same time an EU resident.
                                    The Dallas County Dispute Resolution Center, with its registered office at Kyriakou
                                    Matsi 16, Nicosia, Nicosia, United States, website: LINK, is responsible for the
                                    out-of-court settlement of consumer disputes. You can also use the platform at the
                                    following website to resolve disputes online: LINK
                                </p>
                            </div>

                            <div className="mt-8">
                                <p>CHOICE OF LAW AND JURISDICTION</p>
                                <p>
                                    16.1. Any legal relations established by these GTC or related to them, as well as
                                    any related non-contractual legal relations, shall be governed by the laws of the
                                    Republic of United States. Any dispute that may arise in connection with these GTC
                                    and/or related agreements will fall within the jurisdiction of the United States
                                    court having local jurisdiction according to the registered office of the Provider.
                                </p>
                                <p>
                                    16.2. The provisions of clause 16.1 do not deprive the consumers of the protection
                                    afforded to them by the mandatory laws of the relevant Member State of the European
                                    Union or any other jurisdiction.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p>17. FINAL PROVISIONS</p>
                                <p>17.1. The Provider has not adopted any consumer codes of conduct.</p>
                                <p>
                                    17.2. These GTC constitute the complete terms and conditions agreed between you and
                                    the Provider and supersede all prior agreements relating to the subject matter of
                                    the GTC, whether verbal or written.
                                </p>
                                <p>
                                    17.3. Nothing in these GTC is intended to limit any legal claims set out elsewhere
                                    in these GTC or arising from the applicable law. If the Provider or any third party
                                    authorized thereto does not enforce the compliance with these GTC, this can in no
                                    way be construed as a waiver of any right or claim.
                                </p>
                                <p>
                                    17.4. The Provider may assign any claim arising to the Provider from these GTC or
                                    any agreement to a third party without your consent. You agree that the Provider
                                    may, as the assignor, transfer its rights and obligations under these GTC or any
                                    agreement or parts thereof to a third party. The Customer is not authorized to
                                    transfer or assign the Customer’s rights and obligations under these GTC or any
                                    agreements or parts thereof, or any receivables arising from them, in whole or in
                                    part, to any third party.
                                </p>
                                <p>
                                    17.5. If any provision of the GTC is found to be invalid or ineffective, it shall be
                                    replaced by a provision whose meaning is as close as possible to the invalid
                                    provision. The invalidity or ineffectiveness of one provision shall not affect the
                                    validity of the other provisions. No past or future practice established between the
                                    parties and no custom maintained in general or in the industry relating to the
                                    subject-matter of the performance, which is not expressly referred to in the GTC,
                                    shall be applied and no rights and obligations shall be derived from them for the
                                    parties; in addition, they shall not be taken into account in the interpretation of
                                    manifestations of the will of the parties.
                                </p>
                                <p>
                                    17.6. The schedules to the GTC form integral parts of the GTC. In the event of a
                                    conflict between the wording of the main text of the GTC and any schedule thereof,
                                    the main text of the GTC shall prevail.
                                </p>
                                <p>
                                    17.7. Prior to the mutual acceptance of these GTC, the parties have carefully
                                    assessed the possible risks arising from them and accept those risks.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p>DEFINITIONS, EXPRESSIONS AND ABBREVIATIONS USED</p>
                                <p>
                                    18.1. For the purposes of the GTC, the following definitions shall have the
                                    following meanings: 18.1.1. “Client Section” means the user interface located on the
                                    Website;
                                </p>
                                <p>
                                    18.1.2. “Content” means the Website and all Services, including the Client Section,
                                    their appearance and all applications, data, information, multimedia elements such
                                    as texts, drawings, graphics, design, icons, images, audio and video samples and
                                    other content that may form the Website and the Services (as set out in clause 8.1);
                                </p>
                                <p>18.1.3. “Customer” means the user of the Services (as set out in clause 1.1);</p>
                                <p>
                                    18.1.4. “Myfundedfx Trading Challenge and Verification account” means trading
                                    accounts related to trading education courses provided as part of the Services by
                                    the Provider;
                                </p>
                                <p>
                                    18.1.5. “Myfundedfx Trader account” means a trading account, which relates to the
                                    Myfundedfx Trader program provided by a third-party provider;
                                </p>
                                <p>
                                    18.1.6. “Forbidden Trading Practices” means trading practices strictly forbidden
                                    while using our Services and are more detailed in Section 5.4 of these GTC;
                                </p>
                                <p>18.1.7. “GTC” means these General Terms and Conditions of MyFundedFX LLC;</p>
                                <p>
                                    18.1.8. “Provider” means the provider of certain Services (as set out in clause
                                    1.1);
                                </p>
                                <p>
                                    18.1.9. “Schedules” means Schedule 1 and any other Schedules as applicable, which
                                    are part of these GTC;
                                </p>
                                <p>
                                    18.1.10. “Services” means the Provider’s services as set out in clauses 1.1 and 1.4;
                                </p>
                                <p>
                                    18.1.11. “Trading Platform” means an electronic interface provided by a third party
                                    in which the Customer performs the demotrading; and 18.1.12. “Website” means the
                                    website myfundedfx.com and its subdomains.
                                </p>
                                <p>
                                    18.2. For the purposes of the GTC and their schedules, the following expressions and
                                    abbreviations shall have the following meanings:
                                </p>
                                <p>
                                    18.2.1. “calendar day” means the period from midnight to midnight of the time
                                    currently valid in the United States (Eastern European Summer Time, EST);
                                </p>
                                <p>
                                    18.2.2. “initial capital” means a fictitious amount that the Customer has chosen
                                    when selecting the option of the Myfundedfx Trading Challenge and which the Customer
                                    will use to perform demo trading; 18.2.3.“EUR” means the euro; 18.2.5.“USD” means
                                    the United States dollar; These GTC were published on 18th July and shall enter into
                                    force and effect at 00:01 on 19st July, 2022
                                </p>
                            </div>
                            <h2>
                                Myfundedfx is the trading name of MyFundedFX LLC, United States. Myfundedfx.com and
                                my.challenge.Myfundedfx.com is owned and operated by MyFundedFX LLC, registered office
                                at 100 Crescent Court Suite 700 Dallas, TX 75201, United States (TIN No. 86-2548217) All
                                content published and distributed by MyFundedFX LLC and its affiliates (collectively,
                                the “Company”) is to be treated as general information only. None of the information
                                provided by the Company or contained herein is intended as (a) investment advice, (b) an
                                offer or solicitation of an offer to buy or sell, or (c) a recommendation, endorsement,
                                or sponsorship of any security, company, or fund. Testimonials appearing on the
                                Company’s websites may not be representative of other clients or customers and is not a
                                guarantee of future performance or success. Use of the information contained on the
                                Company’s websites is at your own risk and the Company and its partners,
                                representatives, agents, employees, and contractors assume no responsibility or
                                liability for any use or misuse of such information. Trading in financial markets is a
                                high-risk activity and it is advised not to risk more than one can afford to lose!
                                MyFundedFX LLC does not provide any of the investment services listed in the Capital
                                Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed
                                at residents in any country or jurisdiction where such distribution or use would be
                                contrary to local
                            </h2>
                        </div>
                        <div>© 2022-2023 All Rights Reserved by MyFundedFX LLC</div>
                    </div>
                </div>
            </div>
            <div className="px-8 pb-24 md:pb-0 md:px-0">
                <Footer />
            </div>
        </>
    );
}

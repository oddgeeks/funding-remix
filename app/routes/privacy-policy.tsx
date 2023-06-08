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
    title: 'Privacy Policy | Top Prop Firm | MyFundedFX',
    description:
        'Looking for complete trading control? MyFundedFX offers no time limits, inactivity rules, or trading days requirements. Join now and trade on your terms!',
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

export default function Policy() {
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
                <div className="relative py-16 overflow-hidden ">
                    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                        <div className="relative h-full text-lg" aria-hidden="true"></div>
                    </div>
                    <div className="relative px-8 lg:px-0">
                        <div className="mx-auto text-lg">
                            <p>
                                <span className="block text-base font-semibold tracking-wide text-center uppercase text-funded-50">
                                    Privacy & Policy
                                </span>
                                <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center sm:text-4xl">
                                    My Funded Fx
                                </span>
                            </p>
                            <p className="mt-8 text-xl leading-8 ">
                                Because we want you to be informed about what we do with your information in the best
                                way possible, we have prepared for you this Privacy Policy in accordance with the
                                European Parliament and Council (EU) directive no. 2016/679, on the protection of
                                natural persons with regard to the processing of personal data (hereinafter only as
                                “GDPR”).
                            </p>
                        </div>
                        <div className="mx-auto mt-6 prose prose-lg prose-indigo">
                            <ul className="space-y-2">
                                <p className="my-4 text-2xl font-medium">
                                    In the Privacy Policy, you will learn especially:
                                </p>
                                <li>~ What information we collect about you and why.</li>
                                <li>~ How we use that information.</li>
                                <li>
                                    ~ What your rights regarding the private information used by us are and how to
                                    exercise them with us.
                                </li>
                                <li>~ Information We Collect About You</li>
                                <li>
                                    ~ If you are a natural person, you will fill in for us at the beginning of the
                                    provision of any of the services the personal data necessary for the provision of
                                    such services and for the conclusion of a contract. You will fill out your full
                                    name, your contact information (email, phone), address, IP, and perhaps date of
                                    birth and your bank account number. Without the provision of your personal data, we
                                    are unable to provide the services requested by you. By filling in your e-mail
                                    address in the appropriate form or by creating a profile on the website you can join
                                    to receive commercial communications. This way, we will be able to send you
                                    information about news or interesting events, specific tips and solutions or about
                                    current conferences, lectures, workshops, etc..
                                </li>
                            </ul>
                            <p>
                                Without the provision of your personal data, we are unable to provide the services
                                requested by you. By filling in your e-mail address in the appropriate form or by
                                creating a profile on the website you can join to receive commercial communications.
                                This way, we will be able to send you information about news or interesting events,
                                specific tips and solutions or about current conferences, lectures, workshops, etc..
                            </p>

                            <h2 className="my-4 text-2xl font-medium">How We Use Your Information</h2>
                            <p>
                                The personal data you provide to us are mainly used to provide you the expected services
                                of the highest possible quality – these are the provision of information about the
                                service, billing related thereto, and the fulfilment of our obligations. We store your
                                personal information in our encrypted database. By submitting or otherwise making
                                available your personal information to us, you are entering into a contract with us. In
                                order to perform the contract, we need to continue to use your personal information. We
                                will be processing your personal data for the entire duration of the contractual
                                relationship. After the end of the effectiveness of the contract, we will retain your
                                personal data for the following 4 years for the case of possible objections and/or
                                disputes (i.e. for the duration of the entire general limitation period, after which it
                                is no longer effective to bring an action to court, extended by the length of time it
                                may take before you or we are given notice by the court on the action being actually
                                filed). During these four years, we will already only retain personal information
                                necessary for your or our defence in the event of a litigation. After this period, your
                                personal information will be deleted from our databases entirely unless you do use our
                                services again or unless it is necessary in a particular case for reasons of a specific
                                statutory order.
                            </p>
                            <blockquote>
                                <p>Sending Commercial Communications</p>
                                <p>
                                    In course of providing any service, we will politely ask for your consent to receive
                                    commercial communications. Through commercial communications, we wish to inform you
                                    about our services and future changes. Each of the sent e-mail messages will be
                                    labelled as commercial communication and each of them will contain a link for you to
                                    be able to unsubscribe from receiving commercial communications. We will be
                                    processing your personal data for the purposes of commercial communication for a
                                    period of three years since the time you last used our services. After these three
                                    years, we will ask you to restore your consent to receiving commercial
                                    communications. If you expressly agree to do so, we will pass on your personal
                                    contact information to our partner to contact you with his business offer.
                                </p>
                            </blockquote>
                            <p>What Rights Do You Have and How To Make Use of Them</p>
                            <p>
                                The right to disclosure and the right to correction At any time in the future, you can
                                request us by sending a message to the e-mail address support@Myfundedfx.com to confirm
                                whether or not your personal data are being processed. In the event that your data is
                                being processed by us, we may also inform you at your own request beyond the information
                                given in this Privacy Policy on any third persons to whom your data have been or will be
                                made available, and if we do not obtain your personal data from you, you have the right
                                to all the information available to us about where we had obtained your personal
                                information. If we handle your personal information inaccurately, you can notify us by
                                sending a message to the e-mail address support@Myfundedfx.com and we will then correct
                                the inaccurate personal data without undue delay. If you register on our website, you
                                will have the opportunity to correct your personal information for yourself by editing
                                your profile. In the event that you would like to add some personal data you have not
                                provided previously and such personal data are necessary to ensure our services, simply
                                fill them in the appropriate place in full once more.
                            </p>

                            <h2 className="my-4 text-2xl font-medium">
                                The right to raise objection to the processing of personal data
                            </h2>
                            <p>
                                In case we process your personal data on the basis of our legitimate interest, you have
                                the right to raise objection to such processing by sending a message to the email
                                address support@Myfundedfx.com. If you submit such objection, we will not be able to
                                process your personal data until we show which serious legitimate grounds for processing
                                we have and that these grounds outweigh your interests, your rights and freedoms or the
                                exercise or defence of your legal claims. If we process your personal data for direct
                                marketing purposes (e.g. for the purpose of sending commercial communications), you can
                                raise objection to such processing at the above-mentioned e-mail address. After raising
                                such objection, we will no longer process these data for direct marketing purposes.
                            </p>
                            <p className="my-4 text-2xl font-medium">
                                The right to limitation of personal data processing
                            </p>
                            <p>
                                You have the right to reduction of any processing of your personal data, including their
                                deletion: If you let us know that the personal data collected by us are inaccurate until
                                their accuracy is verified. If the processing of your personal data is unlawful and you
                                request their restriction instead of their deletion at the e-mail address
                                support@Myfundedfx.com. If we admittedly no longer need your personal data to provide
                                our services but you will require them to determine the exercise or defence of legal
                                claims. If you object to the processing according to the paragraph above, until we
                                determine whether our reasons for processing outweigh your interests. Right to be
                                forgotten (the right to deletetion of personal data) In case you find that we process
                                your personal information: Despite the fact that their processing is no longer necessary
                                for the purposes for which they are collected. When you have revoked your consent to
                                their processing and at the same time, there is no further reason to process them (of
                                course, only in cases where we process your personal information based on your consent).
                                If you raise an objection in accordance with the above-stated paragraph and we will not
                                be able to demonstrate reasonable grounds for their processing which would outweigh your
                                interests, your rights and freedoms or the exercise or defence of your legal claims.
                                Without authorization. You have the right for us to delete the personal data thus
                                processed without undue delay after notification of such fact by a message to the email
                                address support@Myfundedfx.com. We may not delete your data even at your request if
                                their processing is necessary for the exercise of the right to freedom of expression and
                                information, to meet some of our legal obligations, or for the performance of a task
                                carried out in public interest, or for the determination, performance and/or defence of
                                our legal claims. The right to the provision of data in a machine-readable form If you
                                notify is by sending a message to the e-mail address support@Myfundedfx.com requesting
                                that we provide you with your personal data as processed by us, we will send them to you
                                in a commonly used, structured, machine readable format (e.g., pdf, or some table
                                format), if we do process such data. If you ask us to send your personal data to another
                                personal data administrator, we have a duty to do so but only in the case that we
                                already process them in this way. The right to withdraw at any time the consent to
                                receive commercial communications In case you no longer wish to receive commercial
                                communications, you can withdraw your consent to receive them at any time without giving
                                any reason by clicking on the designated link that will be part of each commercial
                                message, or by sending a message to the e-mail address support@Myfundedfx.com.
                            </p>
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

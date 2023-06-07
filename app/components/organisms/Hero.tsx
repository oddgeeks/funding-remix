import { useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';
import ModalVideo from 'react-modal-video';

import type { heroSectionType } from '~/types';

import { RatingStars } from './Stars';

export const Hero = ({ heroSection }: { heroSection: heroSectionType }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            {heroSection.attributes?.featuredVideoUrl && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={heroSection.attributes.featuredVideoUrl}
                    onClose={() => setOpen(false)}
                />
            )}
            <div data-testid="mffx-hero-wrapper" className="relative overflow-hidden">
                <div className="px-8 mx-auto mt-12 xl:mt-16 md:container">
                    <div className="space-y-12 xl:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="w-full xl:w-10/12">
                            {heroSection.attributes.subTitle && (
                                <div className="text-2xl font-normal text-center text-white font-lexend md:text-left">
                                    {heroSection.attributes.subTitle}
                                </div>
                            )}
                            {heroSection.attributes.Title && (
                                <div className="text-5xl font-medium leading-10 text-center text-transparent text-white font-lexend md:text-7xl md:text-left bg-clip-text bg-gradient-to-r from-funded-80 to-pink-200">
                                    {heroSection.attributes.Title}
                                </div>
                            )}
                            <h2 className="hidden pt-4 text-lg font-normal leading-8 text-center xl:block text-funded-800 md:text-left">
                                {heroSection.attributes.Description}
                            </h2>
                            <ul className="hidden mt-4 text-lg list-none xl:block text-funded-800">
                                {heroSection.attributes.descriptionFeatures.map((feature) => (
                                    <li className="flex" key={feature.id}>
                                        <CheckIcon className="w-5 mr-2 text-funded-80" />
                                        <span>{feature.Feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {heroSection.attributes?.getFundedLink && (
                                <div className="flex items-center justify-center space-x-6 md:justify-start">
                                    <div className="flex items-center justify-center h-16 rounded-lg w-52 mt-7 bg-funded-50 hover:bg-funded-70">
                                        <a
                                            href={heroSection.attributes.getFundedLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-3 text-xl font-semibold text-funded-150"
                                            data-testid="mffx-hero-sign-up">
                                            Get Funded
                                        </a>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.410765 13.4226C0.0853277 13.0972 0.0853277 12.5695 0.410765 12.2441L5.65484 7L0.410764 1.75592C0.0853272 1.43048 0.0853272 0.902847 0.410764 0.577411C0.736201 0.251973 1.26384 0.251973 1.58928 0.577411L7.42261 6.41074C7.74805 6.73618 7.74805 7.26382 7.42261 7.58925L1.58928 13.4226C1.26384 13.748 0.736202 13.748 0.410765 13.4226Z"
                                                fill="#161A1E"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="flex justify-center md:justify-start">
                                            <h1 className="pl-2 my-2 mt-10 text-sm font-normal text-funded-250">
                                                Join Our Community
                                            </h1>
                                        </div>
                                        <a
                                            href={heroSection.attributes.discordUrl}
                                            target="blank"
                                            className="flex justify-center md:justify-start"
                                            data-testid="mffx-hero-discord">
                                            <img src="/discordsvg.svg" alt="discord" />
                                        </a>
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center pt-4 items-base md:justify-start">
                                <RatingStars rating={5} />
                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {heroSection.attributes.Stars} out of 5
                                </p>
                            </div>
                        </div>
                        <div className="relative mx-auto xl:scale-75">
                            <button
                                onClick={() => setOpen(!isOpen)}
                                type="button"
                                className="relative block w-full overflow-hidden border-4 border-funded-80 rounded-3xl focus:outline-none focus:ring-2 focus:ring-funded-80 focus:ring-offset-4">
                                <span className="sr-only">Best Strategy to Use on MyFundedFX Challenges</span>
                                <div>
                                    <video
                                        // src="https://static.tradingview.com/static/bundles/chart-big.5ddfd85030f4ba213936.mp4"
                                        src="/video/MFFXN.mp4"
                                        muted
                                        loop
                                        autoPlay
                                    />
                                </div>
                                <span
                                    className="absolute inset-0 flex items-center justify-center w-full h-full transition duration-300 ease-in-out delay-150 shadow-lg hover:-translate-y-1 hover:scale-110 animate-ping"
                                    aria-hidden="true">
                                    <svg className="w-20 h-20 text-funded-80" fill="currentColor" viewBox="0 0 84 84">
                                        <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

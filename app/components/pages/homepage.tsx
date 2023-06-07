import { useState } from 'react';
import type { LegacyRef } from 'react';

import { CheckIcon } from '@heroicons/react/24/solid';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useWindowSize } from '@react-hook/window-size';
import classNames from 'classnames';
import { Progress } from 'flowbite-react';
import Confetti from 'react-confetti';
import { HydrationProvider, Client } from 'react-hydration-provider';
import { Parallax } from 'react-scroll-parallax';
import Switch from 'react-switch';

import type { FaqsType, PromotionalBannerType, getStartedType, getTestimonialType, heroSectionType } from '~/types';

import { oneStep, twoStep } from '../../data/mobileTableData';
import { TradingChartHero, TradingLines } from '../atoms';
import {
    BannerFloating,
    Tables,
    Card,
    Hero,
    Newsletter,
    MobileTable,
    Faq,
    TraderDashboard,
    Testimonials,
} from '../organisms';
import { BrokerSection } from '../organisms/BrokerSection';
import { DeelPayount } from '../organisms/DeelPayout';
import { TopBanner } from '../organisms/TopBanner';
import { Footer } from '../templates/footer';
import { GetStarted } from '../templates/getStarted';
import { NavBar } from '../templates/header';

export function Homepage({
    state,
    inputRef,
    faqsData,
    heroSection,
    promotionalBanner,
    getStarted,
    testimonials,
}: {
    state: 'idle' | 'success' | 'error' | 'submitting';
    inputRef: LegacyRef<HTMLInputElement>;
    promotionalBanner?: PromotionalBannerType;
    faqsData: FaqsType;
    heroSection?: heroSectionType;
    getStarted?: getStartedType;
    testimonials?: getTestimonialType;
}) {
    const [checked, setChecked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [tableInView, setTableInView] = useState(0);
    const [entered, setEntered] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState<{ id: number }>({
        id: 20,
    });
    const [width, height] = useWindowSize();

    const handleOnChecked = async (e: boolean) => {
        setChecked(e);
    };

    const priceChallenge = [
        {
            value: 20,
            label: '$5k',
        },
        {
            value: 40,
            label: '$10K',
        },
        {
            value: 60,
            label: '$25K',
        },
        {
            value: 80,
            label: '$50K',
        },
        {
            value: 100,
            label: '$100K',
        },
        {
            value: 120,
            label: '$200K',
        },
    ];
    return (
        <>
            <div id="home" className="relative z-20">
                <HydrationProvider>
                    {promotionalBanner && (
                        <>
                            <Client>
                                <TopBanner promotionalBanner={promotionalBanner} />
                            </Client>
                        </>
                    )}
                </HydrationProvider>
                <div className="hidden xl:block">
                    <Parallax speed={-17}>
                        <TradingLines />
                    </Parallax>
                </div>

                <div className="hidden xl:block">
                    <Parallax speed={10} onEnter={() => setEntered(true)} onExit={() => setEntered(false)}>
                        <TradingChartHero onEnter={entered} />
                    </Parallax>
                </div>
                <div className="hidden xl:block">
                    <Parallax speed={10} onEnter={() => setEntered(true)} onExit={() => setEntered(false)}>
                        <TradingChartHero onEnter={entered} />
                    </Parallax>
                </div>

                <NavBar />

                <HydrationProvider>
                    {heroSection && (
                        <>
                            <Client>
                                <Hero heroSection={heroSection} />
                            </Client>
                        </>
                    )}
                </HydrationProvider>
                <Parallax opacity={[-2, 10]}>
                    <TraderDashboard />

                    <div className="text-4xl font-semibold text-center font-lexend text-funded-80">MyFundedFX</div>
                    <div className="py-2 text-4xl font-semibold text-center font-lexend ">Challenge Accounts</div>

                    <div className="px-8 mx-auto mt-12 xl:mt-16 md:container">
                        {progress > 370 && (
                            <Confetti
                                recycle={false}
                                width={width}
                                height={height + 2000}
                                tweenDuration={100}
                                numberOfPieces={500}
                            />
                        )}
                        <div className="my-24">
                            <ol className="sm:flex">
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <Parallax
                                            scale={[0.5, 1.7]}
                                            onProgressChange={(p) => {
                                                setProgress(p * 500);
                                            }}>
                                            <div
                                                className={classNames(
                                                    progress < 183
                                                        ? 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0 ring-white sm:ring-2 shrink-0'
                                                        : 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0 ring-green-500 sm:ring-2 shrink-0'
                                                )}>
                                                <CheckIcon className="w-4 h-4 text-funded-80" />
                                            </div>
                                        </Parallax>
                                        <div className="w-full">
                                            <Progress
                                                progress={progress > 36 ? progress - 182 : 1}
                                                size="sm"
                                                color="green"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-2 sm:pr-8">
                                        <h3 className="text-2xl font-semibold text-white">Take the Challenge</h3>
                                        <p className="text-base font-normal text-gray-300">
                                            Take the challenge in the MyFundedFX evaluation process and prove that you
                                            have what it takes to be a funded trader. Meet the trading objectives in as
                                            little as one trade.
                                        </p>
                                    </div>
                                </li>
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <Parallax scale={[0.75, 1.7]}>
                                            <div
                                                className={classNames(
                                                    progress > 283
                                                        ? 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0 ring-green-500 sm:ring-2 shrink-0'
                                                        : 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0 ring-white sm:ring-2 shrink-0'
                                                )}>
                                                <CheckIcon className="w-4 h-4 text-funded-80" />
                                            </div>
                                        </Parallax>
                                        <div className="w-full">
                                            <Progress
                                                progress={progress > 283 ? progress - 265 : 1}
                                                size="sm"
                                                color="green"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-2 sm:pr-8">
                                        <h3 className="text-2xl font-semibold text-white">Get Verified</h3>
                                        <p className="text-base font-normal text-gray-300">
                                            After you pass the first challenge, you will establish yourself as a
                                            consistent trader and move to the verification step with a 5% profit target.
                                        </p>
                                    </div>
                                </li>
                                <li className="relative mb-6 sm:mb-0">
                                    <div className="flex items-center">
                                        <Parallax scale={[1, 1.7]}>
                                            <div
                                                className={classNames(
                                                    progress > 370
                                                        ? 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0 ring-green-500 sm:ring-2 shrink-0'
                                                        : 'z-10 flex items-center justify-center w-8 h-8 rounded-full bg-funded-700 ring-0  ring-white sm:ring-2 shrink-0'
                                                )}>
                                                <CheckIcon className="w-4 h-4 text-funded-80" />
                                            </div>
                                        </Parallax>
                                        <div className="w-full">
                                            <Progress
                                                progress={progress > 370 ? progress - 323 : 1}
                                                size="sm"
                                                color="green"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-2 sm:pr-8">
                                        <h3 className="text-2xl font-semibold text-white">Get Funded</h3>
                                        <p className="text-base font-normal text-gray-300">
                                            Once proven you can successfully trade our capital, get up to an 80% profit
                                            split. Continue to trade for as long as you want and get funded up to $1.5
                                            million with scaling.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </Parallax>
                <Parallax opacity={[-1, 10]} onProgressChange={(p) => setTableInView(p)}>
                    <div className="py-2 text-4xl font-semibold text-center font-lexend ">Steps To</div>
                    <div className="text-4xl font-semibold text-center font-lexend text-funded-80">Get Funded</div>

                    <div className="py-2 mt-8 mb-4 text-2xl text-center font-lexend">Select your challenge</div>
                    <div className="flex justify-center space-x-5 font-lexend">
                        <div className="text-xl">2-Steps</div>
                        <Switch
                            className="oneTwoSteps"
                            onChange={handleOnChecked}
                            checked={checked}
                            onColor="#EAC06F"
                        />
                        <div className={!checked ? 'text-xl' : 'text-xl text-funded-50'}>1-Step</div>
                    </div>

                    <Card checked={checked} />
                </Parallax>
                <div className="py-2 mb-4 text-2xl text-center font-lexend ">Make your selection</div>
                <div className="flex justify-center space-x-5 font-lexend">
                    <div className="text-xl ">2-Steps</div>
                    <Switch onChange={handleOnChecked} checked={checked} onColor="#EAC06F" />
                    <div className={!checked ? 'text-xl' : 'text-xl text-funded-50'}>1-Step</div>
                </div>
                <div className="hidden md:block">
                    <Tables checked={checked} />
                </div>
                <div className="mt-10 md:hidden">
                    <div className="px-8 mx-auto">
                        <Box>
                            <Slider
                                sx={{
                                    '& input[type="range"]': {
                                        WebkitAppearance: 'slider-vertical',
                                    },
                                }}
                                defaultValue={5}
                                onChange={(e) =>
                                    setSelectedAmount({
                                        id: Number((e.target as HTMLInputElement).value),
                                    })
                                }
                                step={null}
                                marks={priceChallenge}
                                min={20}
                                max={120}
                                valueLabelDisplay="off"
                            />
                        </Box>
                    </div>
                    {!checked ? (
                        <>
                            <MobileTable challenge="2-Steps" data={twoStep} selectedAmount={selectedAmount} />
                        </>
                    ) : (
                        <>
                            <MobileTable challenge="1-Step" data={oneStep} selectedAmount={selectedAmount} />
                        </>
                    )}
                </div>

                <BrokerSection />

                <DeelPayount className="py-12 mt-8 md:py-20" />

                <Parallax opacity={[-2, 10]}>
                    <HydrationProvider>
                        {faqsData && (
                            <Client>
                                <Faq className="px-8 pb-5 mx-auto md:py-20" faqsData={faqsData} />
                            </Client>
                        )}
                    </HydrationProvider>
                </Parallax>

                <Parallax opacity={[-2, 10]}>
                    <HydrationProvider>
                        {getStarted && (
                            <Client>
                                <GetStarted getStarted={getStarted} />
                            </Client>
                        )}
                    </HydrationProvider>
                </Parallax>

                {testimonials && (
                    <div className="px-8 py-20">
                        <Parallax opacity={[-1, 10]}>
                            <HydrationProvider>
                                <Client>
                                    <Testimonials testimonials={testimonials} />
                                </Client>
                            </HydrationProvider>
                        </Parallax>
                    </div>
                )}

                <div className="relative px-8 md:px-0">
                    <Parallax opacity={[-2, 10]}>
                        <Newsletter state={state} inputRef={inputRef} />
                    </Parallax>
                </div>

                <div className="px-8 pb-24 md:pb-0 md:px-0">
                    <Footer />
                </div>

                {tableInView > 0.72 && <BannerFloating />}
            </div>
        </>
    );
}

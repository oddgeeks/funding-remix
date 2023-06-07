import Markdown from 'markdown-to-jsx';
import { ParallaxBanner } from 'react-scroll-parallax';

import type { getStartedType } from '~/types';

export const GetStarted = ({ getStarted }: { getStarted: getStartedType }) => (
    <div id="getstarted" className="mx-auto md:container">
        <div className="relative block px-8 mt-8 text-center xl:hidden md:px-0">
            <div className="px-8 py-8 bg-fixed bg-no-repeat bg-funded-700">
                {getStarted.attributes.Title && (
                    <div className="text-4xl font-semibold text-white xl:text-4xl font-lexend">
                        {getStarted.attributes.Title}
                    </div>
                )}
                {getStarted.attributes.subTitle && (
                    <div
                        className="justify-center gap-2 pt-5 font-normal text-white xl:text-xl font-lexend md:flex"
                        dangerouslySetInnerHTML={{ __html: getStarted.attributes.subTitle }}
                    />
                )}
                <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2 mt-7">
                        <a
                            href={getStarted.attributes.discordLink}
                            target="blank"
                            className="p-4 text-xl font-semibold rounded-lg text-funded-150 bg-funded-65 hover:bg-funded-70"
                            data-testid="mffx-cta-discord">
                            Join Our Discord
                            <img src="/discord-1.svg" alt="discord" className="inline-block ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden mx-auto bg-fixed bg-no-repeat bg-funded-700 xl:block">
            <div>
                <ParallaxBanner
                    layers={[
                        {
                            image: `${getStarted.attributes.coverImageUrl}`,
                            speed: -20,
                        },
                        {
                            children: (
                                <div className="mt-48">
                                    <div className="text-white font-lexend font-semibold text-[40px]">
                                        {getStarted.attributes.Title}
                                    </div>
                                    <div className="justify-center gap-2 pt-5 text-xl font-normal text-white font-lexend md:flex">
                                        <Markdown
                                            options={{
                                                overrides: {
                                                    h4: {
                                                        component: 'h4',
                                                        props: {
                                                            style: {
                                                                fontSize: '18px',
                                                                fontFamily: 'Lexend',
                                                            },
                                                        },
                                                    },
                                                    p: {
                                                        component: 'p',
                                                        props: {
                                                            style: {
                                                                fontSize: '20px',
                                                            },
                                                        },
                                                    },
                                                },
                                            }}>
                                            {getStarted.attributes.subTitle}
                                        </Markdown>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center justify-center gap-2 mt-7">
                                            <a
                                                href={getStarted.attributes.discordLink}
                                                target="blank"
                                                className="p-4 text-xl font-semibold rounded-lg text-funded-150 bg-funded-65 hover:bg-funded-70"
                                                data-testid="mffx-cta-discord">
                                                Join Our Discord
                                                <img src="/discord-1.svg" alt="discord" className="inline-block ml-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ),
                            speed: -10,
                        },
                    ]}
                    className="text-center rounded-lg shadow-md border-funded-600"
                    style={{ aspectRatio: '3 / 1' }}
                />
            </div>
        </div>
    </div>
);

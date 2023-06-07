import type { LegacyRef } from 'react';

import { Form, Link } from '@remix-run/react';
import { ParallaxBanner } from 'react-scroll-parallax';

export function Newsletter({
    state,
    inputRef,
}: {
    state: 'idle' | 'success' | 'error' | 'submitting';
    inputRef: LegacyRef<HTMLInputElement>;
}) {
    return (
        <div data-testid="mffx-layer-one" className="mx-auto md:container">
            <div>
                <div className="flex justify-center w-full p-4 rounded-lg shadow-md bg-funded-700 border-funded-600 xl:hidden">
                    <div className="w-full md:w-2/3">
                        <div className="py-5 text-xl font-bold text-center text-white font-lexend md:text-4xl">
                            Be the first to know about promotions and discounts
                        </div>
                        <div className="mb-6 text-base font-medium text-center text-white font-lexend">
                            Get instant access to weekly newsletter.
                        </div>
                        <div>
                            <div>
                                <div>
                                    {state !== 'success' && (
                                        <Form method="post">
                                            <fieldset className="flex flex-col justify-center gap-3 pb-3 md:flex-row md:items-center">
                                                <div className="md:w-96">
                                                    <input
                                                        className="w-[100%]  h-12 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-funded-50 focus:outline-none"
                                                        aria-label="Email address"
                                                        aria-describedby="error-message"
                                                        ref={inputRef}
                                                        type="email"
                                                        name="email"
                                                        placeholder="you@example.com"
                                                        required
                                                    />
                                                </div>

                                                <div className="h-12 px-5 py-3 text-center rounded-md bg-funded-90">
                                                    <button
                                                        className="text-base font-medium font-popin text-funded-150"
                                                        type="submit">
                                                        {state === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                                                    </button>
                                                </div>
                                            </fieldset>
                                        </Form>
                                    )}
                                    {state === 'success' && (
                                        <p className="text-center text-white">
                                            You have successfully subscribed to our newsletter
                                        </p>
                                    )}
                                </div>
                                <div className="items-center justify-center text-center">
                                    <div className="mr-2 text-xs font-medium font-popin text-funded-1000">
                                        We care about your data in our
                                    </div>
                                    <div className="text-xs font-medium font-popin text-funded-90 hover:text-white">
                                        <Link to="/policy">privacy policy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center hidden w-full rounded-lg shadow-md bg-funded-600 border-funded-600 xl:flex">
                    <ParallaxBanner
                        className="w-2/3"
                        layers={[
                            {
                                image: 'https://res.cloudinary.com/netdesignr-ltd/image/upload/c_scale,o_13,q_20,w_1771/v1672343907/MyFundedFX/TorNovember29_Converted_wl1izr.webp',
                                speed: -20,
                            },
                            {
                                children: (
                                    <div className="mt-24 md:mt-48">
                                        <div className="py-5 text-2xl font-bold text-center text-white font-lexend md:text-4xl">
                                            Be the first to know about promotions <br /> and discounts
                                        </div>
                                        <div className="mb-6 text-base font-medium text-center text-white font-lexend">
                                            Get instant access to weekly newsletter.
                                        </div>
                                        <div>
                                            <div>
                                                <div>
                                                    {state !== 'success' && (
                                                        <Form method="post">
                                                            <fieldset className="flex flex-col justify-center gap-3 pb-3 md:flex-row md:items-center">
                                                                <div className="md:w-96">
                                                                    <input
                                                                        className="w-[100%]  h-12 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-funded-50 focus:outline-none"
                                                                        aria-label="Email address"
                                                                        aria-describedby="error-message"
                                                                        ref={inputRef}
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder="you@example.com"
                                                                        required
                                                                    />
                                                                </div>

                                                                <div className="h-12 px-5 py-3 text-center rounded-md bg-funded-90">
                                                                    <button
                                                                        className="text-base font-medium font-popin text-funded-150"
                                                                        type="submit">
                                                                        {state === 'submitting'
                                                                            ? 'Subscribing...'
                                                                            : 'Subscribe'}
                                                                    </button>
                                                                </div>
                                                            </fieldset>
                                                        </Form>
                                                    )}
                                                    {state === 'success' && (
                                                        <p className="text-center text-white">
                                                            You have successfully subscribed to our newsletter
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <div className="mr-2 text-xs font-medium font-popin text-funded-1000">
                                                        We care about your data in our privacy policy
                                                    </div>
                                                    <div className="text-xs font-medium font-popin text-funded-90 hover:text-white">
                                                        <Link to="/policy">privacy policy</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ),
                                speed: -10,
                            },
                        ]}
                        style={{ aspectRatio: '3 / 1' }}
                    />
                </div>
            </div>
        </div>
    );
}

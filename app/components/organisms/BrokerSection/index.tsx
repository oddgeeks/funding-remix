import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export const BrokerSection = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div
            data-testid="mffx-eight-cap"
            className="container w-full bg-no-repeat bg-cover md:bg-brokerSection md:my-16">
            <div className="px-8 py-12 mx-auto text-center max-w-7xl md:py-20 font-lexend">
                <div>
                    <h2 className="text-4xl font-semibold ">We work with Eightcap</h2>
                    <p className="py-8 text-xl text-funded-400">
                        Millions of traders also use MT4 and MT5, Eightcap’s platforms, to{' '}
                        <br className="hidden md:block" />
                        invest in Forex, online exchanges and options trading.{' '}
                    </p>
                    <p className="text-base text-funded-400">Download and install their apps for any device</p>
                </div>

                <div className="flex items-center justify-center gap-5 pt-8 text-center ">
                    <h3 className={` font-bold font-lexend text-xl  ${!enabled ? ' text-funded-50' : 'text-white'} `}>
                        MT4
                    </h3>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-funded-50' : 'bg-gray-200 '
                        } relative inline-flex h-11 w-20 items-center rounded-full`}>
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${
                                enabled ? 'translate-x-10 bg-white' : 'translate-x-1 bg-funded-50'
                            } inline-block h-9 w-9 transform rounded-full  transition`}
                        />
                    </Switch>
                    <h3 className={` font-bold font-lexend text-xl  ${enabled ? ' text-funded-50' : 'text-white'} `}>
                        MT5
                    </h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5 pt-10 ">
                    <a
                        href={
                            enabled
                                ? 'https://shared.assets.eightcap.com/files/downloads/eightcap-mt5-mac-catalina.dmg'
                                : 'https://shared.assets.eightcap.com/files/downloads/eightcap-mt4-mac-catalina.dmg'
                        }
                        className="flex items-center justify-center w-full gap-2 px-5 py-4 text-base font-medium text-black transition ease-in-out delay-75 rounded-lg bg-funded-50 lg:w-max hover:bg-funded-60">
                        <svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.7939 8.18242C19.655 8.29043 17.2022 9.67537 17.2022 12.7549C17.2022 16.3168 20.3232 17.577 20.4167 17.6082C20.4023 17.685 19.9208 19.3339 18.7711 21.0141C17.7459 22.4926 16.6752 23.9688 15.0464 23.9688C13.4176 23.9688 12.9985 23.0207 11.1182 23.0207C9.28578 23.0207 8.63426 24 7.14439 24C5.65453 24 4.61497 22.6319 3.41973 20.9517C2.03525 18.9787 0.916656 15.9136 0.916656 13.0045C0.916656 8.33843 3.94429 5.86379 6.92403 5.86379C8.50731 5.86379 9.82711 6.90549 10.8212 6.90549C11.7673 6.90549 13.2428 5.80138 15.044 5.80138C15.7267 5.80138 18.1795 5.86379 19.7939 8.18242ZM14.1889 3.82598C14.9339 2.94029 15.4608 1.71137 15.4608 0.482448C15.4608 0.312031 15.4464 0.139214 15.4153 0C14.2033 0.0456046 12.7613 0.808881 11.8918 1.81938C11.2092 2.59706 10.572 3.82598 10.572 5.07171C10.572 5.25893 10.6032 5.44614 10.6176 5.50615C10.6942 5.52055 10.8188 5.53735 10.9433 5.53735C12.0308 5.53735 13.3985 4.80768 14.1889 3.82598Z"
                                fill="#161A1E"
                            />
                        </svg>
                        For Mac OS
                    </a>
                    <a
                        href={
                            enabled
                                ? 'https://download.mql5.com/cdn/web/eightcap.pty.ltd/mt5/eightcap5setup.exe'
                                : 'https://download.mql5.com/cdn/web/eightcap.ltd/mt4/eightcapltd4setup.exe'
                        }
                        className="flex items-center justify-center w-full gap-2 px-5 py-4 text-base font-medium text-black transition ease-in-out delay-75 rounded-lg bg-funded-50 lg:w-max hover:bg-funded-60">
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1112_509)">
                                <path
                                    d="M0.634796 3.42466L10.339 2.08219V11.5342H0.634796M11.5078 1.89041L24.3651 0V11.4521H11.5078M0.634796 12.5315H10.339V22.011L0.634796 20.6411M11.5078 12.6575H24.3651V24L11.5078 22.1644"
                                    fill="#161A1E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1112_509">
                                    <rect width={24} height={24} fill="white" transform="translate(0.499969)" />
                                </clipPath>
                            </defs>
                        </svg>
                        For Windows
                    </a>
                    <a
                        href={
                            enabled
                                ? 'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5'
                                : 'https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4'
                        }
                        className="flex items-center justify-center w-full gap-2 px-5 py-4 text-base font-medium text-black transition ease-in-out delay-75 rounded-lg bg-funded-50 lg:w-max hover:bg-funded-60">
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1112_513)">
                                <path
                                    d="M18.1825 9.32959L20.1713 5.88546C20.2835 5.69238 20.2157 5.44712 20.0251 5.33492C19.8346 5.22273 19.5867 5.28795 19.477 5.48103L17.4621 8.96952C15.9247 8.26764 14.1943 7.87626 12.3333 7.87626C10.4723 7.87626 8.74187 8.26764 7.20455 8.96952L5.18958 5.48103C5.07735 5.28795 4.83201 5.22273 4.63886 5.33492C4.44572 5.44712 4.38046 5.69238 4.4927 5.88546L6.48156 9.32959C3.05194 11.1873 0.728991 14.6576 0.345322 18.72H24.3213C23.9376 14.6575 21.6147 11.1873 18.1825 9.32959ZM6.8287 15.3542C6.27276 15.3542 5.82383 14.9028 5.82383 14.3497C5.82383 13.7939 6.27537 13.3451 6.8287 13.3451C7.38464 13.3451 7.83357 13.7965 7.83357 14.3497C7.83619 14.9028 7.38464 15.3542 6.8287 15.3542ZM17.8353 15.3542C17.2794 15.3542 16.8305 14.9028 16.8305 14.3497C16.8305 13.7939 17.282 13.3451 17.8353 13.3451C18.3913 13.3451 18.8402 13.7965 18.8402 14.3497C18.8428 14.9028 18.3913 15.3542 17.8353 15.3542Z"
                                    fill="#161A1E"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1112_513">
                                    <rect width={24} height={24} fill="white" transform="translate(0.333321)" />
                                </clipPath>
                            </defs>
                        </svg>
                        For Android
                    </a>
                </div>
            </div>
        </div>
    );
};

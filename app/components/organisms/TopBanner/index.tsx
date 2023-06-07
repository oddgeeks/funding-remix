import { useState } from 'react';

import Countdown from 'react-countdown';

import { Skeleton } from '~/components/atoms/Skeleton';
import type { PromotionBannerSlider, PromotionalBannerType } from '~/types';
import { useTimestamp } from '~/utils/useTimeStamp';
import { isObjectEmpty } from '~/utils/utils';

export function TopBanner({ promotionalBanner }: { promotionalBanner: PromotionalBannerType }) {
    const [expended, setExpended] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const data = promotionalBanner;

    let offerEndTime;

    if (isObjectEmpty(promotionalBanner)) {
        return null;
    }

    offerEndTime = useTimestamp(data.attributes.OfferEndTime);

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
    }: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        completed: boolean;
    }) => {
        // Render a countdown
        return (
            <>
                {!expended ? (
                    <>
                        <div className="flex flex-col text-xs font-normal text-funded-420">
                            <span className="text-2xl font-bold ">
                                <span className="text-2xl font-bold text-white font-lexend">{days}</span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col text-xs font-normal text-funded-420 ">
                            <span className="text-2xl font-bold ">
                                <span className="text-2xl font-bold text-white font-lexend">{hours}</span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col text-xs font-normal text-funded-420 ">
                            <span className="text-2xl font-bold ">
                                <span className="text-2xl font-bold text-white font-lexend">{minutes}</span>
                            </span>
                            minutes
                        </div>
                        <div className="flex flex-col text-xs font-normal text-funded-420">
                            <span className="text-2xl font-bold ">
                                <span className="text-2xl font-bold text-white font-lexend">{seconds}</span>
                            </span>
                            seconds
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex min-w-[66px]  flex-col bg-funded-470 p-2 rounded-lg font-normal text-xs   text-funded-420">
                            <span>
                                <span className="text-2xl font-bold text-white font-lexend">{days}</span>
                            </span>
                            days
                        </div>
                        <div className="flex min-w-[66px] flex-col bg-funded-470 p-2 rounded-lg font-normal text-xs  text-funded-420 ">
                            <span>
                                <span className="text-2xl font-bold text-white font-lexend">{hours}</span>
                            </span>
                            hours
                        </div>
                        <div className="flex min-w-[66px] flex-col   bg-funded-470 p-2 rounded-lg font-normal text-xs  text-funded-420 ">
                            <span>
                                <span className="text-2xl font-bold text-white font-lexend">{minutes}</span>
                            </span>
                            minuts
                        </div>
                        <div className="flex min-w-[66px]  flex-col bg-funded-470 p-2 rounded-lg  font-normal text-xs  text-funded-420">
                            <span>
                                <span className="text-2xl font-bold text-white font-lexend">{seconds}</span>
                            </span>
                            seconds
                        </div>
                    </>
                )}
            </>
        );
    };

    return (
        <>
            {!isHidden && !isObjectEmpty(data) && (
                <div className="relative overflow-hidden bg-funded-720 " data-testid="mffx-topbanner">
                    <div className="absolute inset-0 opacity-[0.90] ">
                        <svg viewBox="0 0 1783 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_1121_582)">
                                <rect width="683" height="64" fill="#DBB66B" />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_1121_582"
                                    x="-200"
                                    y="-200"
                                    width="1083"
                                    height="464"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1121_582" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="relative p-8 mx-auto max-w-7xl md:p-0">
                        {!expended ? (
                            <div className="pt-4 transition-all duration-200 ease-in sm:py-4">
                                <div className="right-0 hidden md:flex md:absolute top-8 md:right-10 ">
                                    <button
                                        data-testid="mffx-animate-bounce"
                                        type="button"
                                        className="animate-bounce"
                                        onClick={() => setExpended(!expended)}>
                                        <div className={`${expended && 'rotate-180'}`}>
                                            <svg
                                                width="12"
                                                height="26"
                                                viewBox="0 0 12 26"
                                                className=" fill-white hover:fill-funded-50"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6 0C6.55228 0 7 0.447715 7 1L7 22.5858L10.2929 19.2929C10.6834 18.9024 11.3166 18.9024 11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071L6.70711 25.7071C6.31658 26.0976 5.68342 26.0976 5.29289 25.7071L0.292893 20.7071C-0.0976311 20.3166 -0.0976311 19.6834 0.292893 19.2929C0.683417 18.9024 1.31658 18.9024 1.70711 19.2929L5 22.5858L5 1C5 0.447715 5.44771 0 6 0Z"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap md:gap-10">
                                    <div className="flex items-center justify-center gap-3 text-base font-lexend">
                                        <span className="block sm:ml-2 sm:inline-block shrink-0">
                                            <svg
                                                width="24"
                                                height="28"
                                                viewBox="0 0 24 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M15.4869 0.126572C15.8886 0.350495 16.0857 0.819472 15.9648 1.26312L13.3092 11H23C23.3982 11 23.7584 11.2362 23.9171 11.6015C24.0758 11.9667 24.0027 12.3912 23.731 12.6823L9.73105 27.6823C9.41728 28.0185 8.91469 28.0974 8.51304 27.8734C8.1114 27.6495 7.91423 27.1805 8.03523 26.7369L10.6907 17H0.999991C0.601794 17 0.241545 16.7638 0.0828442 16.3986C-0.0758565 16.0333 -0.00276086 15.6088 0.268936 15.3177L14.2689 0.317685C14.5827 -0.0184921 15.0853 -0.0973517 15.4869 0.126572Z"
                                                    fill="#DBB66B"
                                                />
                                            </svg>
                                        </span>
                                        {data && (
                                            <span>
                                                {data.attributes.Title} {data.attributes.SubTitle}{' '}
                                            </span>
                                        )}

                                        <div className="pt-1 md:hidden">
                                            <button
                                                data-testid="mffx-animate-bounce-button"
                                                type="button"
                                                className="animate-bounce"
                                                onClick={() => setExpended(!expended)}>
                                                <div className={`${expended && 'rotate-180'} `}>
                                                    <svg
                                                        width="12"
                                                        height="26"
                                                        viewBox="0 0 12 26"
                                                        className=" fill-white hover:fill-funded-50"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M6 0C6.55228 0 7 0.447715 7 1L7 22.5858L10.2929 19.2929C10.6834 18.9024 11.3166 18.9024 11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071L6.70711 25.7071C6.31658 26.0976 5.68342 26.0976 5.29289 25.7071L0.292893 20.7071C-0.0976311 20.3166 -0.0976311 19.6834 0.292893 19.2929C0.683417 18.9024 1.31658 18.9024 1.70711 19.2929L5 22.5858L5 1C5 0.447715 5.44771 0 6 0Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        data-testid="mffx-count-down"
                                        className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                        {offerEndTime === null ? (
                                            <Skeleton />
                                        ) : (
                                            <Countdown
                                                renderer={renderer}
                                                date={new Date(offerEndTime)}
                                                onComplete={() => setIsHidden(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div
                                    className={`flex transition-all duration-200 ease-in-out ${
                                        expended && 'md:max-h-[384px]'
                                    }  justify-center flex-wrap  flex-col-reverse  sm:flex-nowrap  sm:flex-row   gap-5`}>
                                    <div className={` md:absolute right-8 top-10 hidden md:block z-50`}>
                                        <button
                                            data-testid="mffx-bounce-button"
                                            type="button"
                                            className="z-50 animate-bounce"
                                            onClick={() => setExpended(!expended)}>
                                            <div className={`${expended && 'rotate-180'} `}>
                                                <svg
                                                    width="12"
                                                    height="26"
                                                    viewBox="0 0 12 26"
                                                    className=" fill-white hover:fill-funded-50"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6 0C6.55228 0 7 0.447715 7 1L7 22.5858L10.2929 19.2929C10.6834 18.9024 11.3166 18.9024 11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071L6.70711 25.7071C6.31658 26.0976 5.68342 26.0976 5.29289 25.7071L0.292893 20.7071C-0.0976311 20.3166 -0.0976311 19.6834 0.292893 19.2929C0.683417 18.9024 1.31658 18.9024 1.70711 19.2929L5 22.5858L5 1C5 0.447715 5.44771 0 6 0Z"
                                                    />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="relative z-10 w-full text-left md:w-1/2 sm:p-8 ">
                                        <div
                                            data-testid="mffx-promo-banner-heading"
                                            className="flex items-start justify-between text-4xl font-semibold font-lexend">
                                            {data.attributes.Title}
                                            <div className={`  md:hidden `}>
                                                <button
                                                    data-testid="mffx-bounce"
                                                    type="button"
                                                    className="animate-bounce"
                                                    onClick={() => setExpended(!expended)}>
                                                    <div className={`${expended && 'rotate-180'} `}>
                                                        <svg
                                                            width="12"
                                                            height="26"
                                                            viewBox="0 0 12 26"
                                                            className=" fill-white hover:fill-funded-50"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M6 0C6.55228 0 7 0.447715 7 1L7 22.5858L10.2929 19.2929C10.6834 18.9024 11.3166 18.9024 11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071L6.70711 25.7071C6.31658 26.0976 5.68342 26.0976 5.29289 25.7071L0.292893 20.7071C-0.0976311 20.3166 -0.0976311 19.6834 0.292893 19.2929C0.683417 18.9024 1.31658 18.9024 1.70711 19.2929L5 22.5858L5 1C5 0.447715 5.44771 0 6 0Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="flex items-center justify-between gap-5 ">
                                            <div
                                                data-testid="mffx-sub-heading"
                                                className="text-sm font-lexend md:text-base">
                                                {data.attributes.SubTitle}
                                            </div>
                                            <div className="relative z-50 flex flex-col text-xs font-normal md:hidden text-funded-420">
                                                <span>
                                                    <span className="font-lexend text-[32px] md:text-[40px] font-semibold text-white">
                                                        {data.attributes.Discount}
                                                    </span>
                                                </span>
                                                <span className="text-sm md:text-lg">discount</span>
                                            </div>
                                            <div className="relative z-10 flex flex-col text-xs font-normal md:hidden text-funded-420">
                                                <span>
                                                    <span className=" font-lexend text-[32px] md:text-[40px]font-semibold text-white">
                                                        {data.attributes.Profit}
                                                    </span>
                                                </span>
                                                <span className="text-sm md:text-lg">fee refund</span>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="mffx-count-down-date"
                                            className="flex flex-wrap justify-start gap-5 mt-8 mb-10 text-center sm:flex-nowrap ">
                                            {offerEndTime === null ? (
                                                <Skeleton />
                                            ) : (
                                                <Countdown
                                                    renderer={renderer}
                                                    date={new Date(offerEndTime)}
                                                    onComplete={() => setIsHidden(true)}
                                                />
                                            )}
                                        </div>
                                        <div className="grid w-full grid-cols-1 md:w-64">
                                            <span
                                                data-testid="mffx-coupon-code"
                                                className="p-2 mb-3 tracking-wide outline-dashed outline-2 outline-offset-2 outline-funded-50">
                                                {data.attributes.CouponCode}
                                            </span>
                                            <a
                                                href={data.attributes.CouponLink}
                                                target="_blank"
                                                data-testid="mffx-link-grab-code"
                                                rel="noreferrer"
                                                className="p-4 text-base font-semibold text-center text-black rounded-lg bg-funded-50 hover:bg-funded-60">
                                                Use Coupon and Get Funded
                                            </a>
                                        </div>
                                    </div>
                                    <div className="relative flex-wrap justify-center w-full gap-5 md:p-8 md:w-1/2 md:flex md:justify-start md:flex-nowrap">
                                        <div className="absolute top-0 right-0 sm:inset-0 ">
                                            <svg
                                                className="opacity-[0.50] w-[259px] h-[302px] md:w-[474px] md:h-[357px]"
                                                viewBox="0 0 474 357"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M305.867 -194C313.8 -189.578 317.694 -180.315 315.304 -171.553L262.858 20.75H454.25C462.114 20.75 469.229 25.4159 472.364 32.6287C475.498 39.8415 474.054 48.2265 468.688 53.9758L192.188 350.226C185.991 356.865 176.065 358.423 168.133 354C160.2 349.578 156.306 340.315 158.696 331.553L211.142 139.25H19.7499C11.8856 139.25 4.77063 134.584 1.63629 127.371C-1.49805 120.159 -0.0544125 111.774 5.3116 106.024L281.812 -190.226C288.008 -196.865 297.935 -198.423 305.867 -194Z"
                                                    fill="url(#paint0_linear_1199_94)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1199_94"
                                                        x1="237"
                                                        y1="-196.501"
                                                        x2="237"
                                                        y2="356.501"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E3CB8F" />
                                                        <stop offset="1" stopColor="#E3CB8F" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="relative z-50 flex-col hidden text-xs font-normal md:flex text-funded-420">
                                            <span>
                                                <span
                                                    data-testid="mffx-banner-discount"
                                                    className="font-lexend text-[40px] font-semibold text-white">
                                                    {data.attributes.Discount}
                                                </span>
                                            </span>
                                            <span className="text-lg">discount</span>
                                        </div>
                                        <div className="relative z-10 flex-col hidden text-xs font-normal md:flex text-funded-420">
                                            <span>
                                                <span
                                                    data-testid="mffx-banner-profit"
                                                    className=" font-lexend text-[40px] font-semibold text-white">
                                                    {data.attributes.Profit}
                                                </span>
                                            </span>
                                            <span className="text-lg">fee refund</span>
                                        </div>
                                    </div>
                                </div>
                                <ul data-testid="mffx-promo-valid-update" className="list-disc gap-x-14 marqueeTop">
                                    {data.attributes.PromotionBannerSlider.map((step: PromotionBannerSlider) => (
                                        <li key={step.id} className="pt-10 md:py-5">
                                            {step.SliderText}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

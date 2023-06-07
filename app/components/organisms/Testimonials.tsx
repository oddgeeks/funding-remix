import { useEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';
import { useInView } from 'framer-motion';
import Markdown from 'markdown-to-jsx';

import type { TestimonialType, getTestimonialType } from '~/types';

interface ReviewInterfaceProps {
    className?: string;
    id: number;
    review: string;
    user: string;
    avatar: string;
    children?: React.ReactNode;
}

function Review({ ...props }: ReviewInterfaceProps) {
    // animationDelay to set when component is shown
    // const animationDelay = useMemo(() => {
    //     const possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];
    //     return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
    // }, []);

    return (
        <figure
            className={clsx('animate-fade-in')}
            //  style={{ animationDelay }}
        >
            <div className="w-full p-6 overflow-auto border rounded-lg shadow-md h-fit bg-funded-700 border-funded-600">
                <div className="text-base font-normal text-funded-1000 font-popin">
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
                                            fontSize: '16px',
                                        },
                                    },
                                },
                            },
                        }}>
                        {props.review}
                    </Markdown>
                </div>
                <div className="h-[1px] w-full bg-funded-600 my-3" />
                <div className="flex justify-between">
                    <div className="font-normal text-xl font-popin max-w-[150px]">{props.user}</div>
                    <img alt="" className="rounded-full" src={props.avatar} />
                </div>
            </div>
        </figure>
    );
}

function splitArray<T>(array: T[], numParts: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i++) {
        const index = i % numParts;
        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(array[i]);
    }
    return result;
}

interface ReviewColumnProps {
    className?: string;
    reviews: TestimonialType[];
    reviewClassName?: (index: number) => string;
    msPerPixel?: number;
}

function ReviewColumn({ className, reviews, reviewClassName = () => '', msPerPixel = 0 }: ReviewColumnProps) {
    const columnRef = useRef<HTMLDivElement>(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const duration = `${columnHeight * msPerPixel}ms`;
    useEffect(() => {
        let resizeObserver: ResizeObserver | null = null;
        if (typeof window.ResizeObserver === 'function') {
            resizeObserver = new window.ResizeObserver(() => {
                setColumnHeight(columnRef.current?.offsetHeight ?? 0);
            });

            if (columnRef.current) {
                resizeObserver.observe(columnRef.current);
            }
        }

        return () => {
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={columnRef}
            className={clsx('animate-marquee space-y-8 py-4', className)}
            style={{ '--marquee-duration': duration } as React.CSSProperties}>
            {reviews.concat(reviews).map((review: TestimonialType, reviewIndex: number) => (
                <Review
                    key={reviewIndex}
                    aria-hidden={reviewIndex >= reviews.length}
                    className={reviewClassName(reviewIndex % reviews.length)}
                    {...review}
                />
            ))}
        </div>
    );
}

function ReviewGrid({ reviews }: { reviews: getTestimonialType }) {
    const userData = reviews.attributes.testimonial;
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });
    let columns: TestimonialType[][] = splitArray(userData, 3);
    columns = [columns[0], columns[1], ...splitArray(columns[2], 2)];

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {isInView && (
                <>
                    <ReviewColumn
                        reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
                        reviewClassName={(reviewIndex) =>
                            clsx(
                                reviewIndex >= columns[0].length + (columns[2][0].length as number) && 'md:hidden',
                                reviewIndex >= columns[0].length && 'lg:hidden'
                            )
                        }
                        msPerPixel={10}
                    />
                    <ReviewColumn
                        reviews={[
                            ...(Array.isArray(columns[1]) ? columns[1] : []),
                            ...(Array.isArray(columns[2][1]) ? columns[2][1] : []),
                        ]}
                        className="hidden md:block"
                        reviewClassName={(reviewIndex) => (reviewIndex >= columns[1].length ? 'lg:hidden' : '')}
                        msPerPixel={15}
                    />
                    <ReviewColumn reviews={columns[2].flat()} className="hidden lg:block" msPerPixel={10} />
                </>
            )}
            <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-funded-600" />
            <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-funded-600" />
        </div>
    );
}

export function Testimonials({ testimonials }: { testimonials: getTestimonialType }) {
    return (
        <section data-testid="mffx-trust-pilot" className="mx-auto max-w-screen-2xl">
            <div className="mx-auto md:container place-content-center place-items-center">
                {testimonials.attributes && (
                    <div className="py-10 text-center">
                        {/* <a
                            className="block w-64 mx-auto mb-8"
                            href={testimonials.attributes.trustPilotLink}
                            target="_blank"
                            rel="noreferrer">
                            <img className="" src="./rating-transparent.png" alt="MyFundedFX Trust Pilot reviews" />
                        </a> */}
                        {testimonials.attributes.title && (
                            <div className="font-lexend text-2xl md:text-[40px] font-semibold">
                                {testimonials.attributes.title}
                            </div>
                        )}
                        {testimonials.attributes.subTitle && (
                            <div className="mt-4 font-normal text-md md:text-xl font-lexend text-funded-400">
                                {testimonials.attributes.subTitle}
                            </div>
                        )}
                    </div>
                )}
                <ReviewGrid reviews={testimonials} />
            </div>
        </section>
    );
}

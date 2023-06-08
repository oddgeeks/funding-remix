import { Link } from '@remix-run/react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { NavListItemProps } from './headerNav';

export function InternalLink({ title, to, description }: NavListItemProps) {
    return (
        <Link
            to={to}
            className="flex flex-col md:gap-4 md:py-16 md:px-8 first:pl-0 last:pr-0 h-auto max-h-full md:border-r md:border-[#4f5255] md:last:border-r-0 items-start group hover:cursor-pointer first:hover:bg-hoverFirstChild hover:bg-hoverMiddleChild last:hover:bg-hoverLastChild">
            <PartOfNav title={title} to={to} description={description} isComing={false} />
        </Link>
    );
}

export function ExternalLink({ title, to, description }: NavListItemProps) {
    return (
        <a
            href={to}
            target="_blank"
            className=" flex flex-col md:gap-4 md:py-16 md:px-8 first:pl-0 last:pr-0 h-auto max-h-full md:border-r md:border-[#4f5255] md:last:border-r-0 items-start group hover:cursor-pointer first:hover:bg-hoverFirstChild hover:bg-hoverMiddleChild last:hover:bg-hoverLastChild">
            <PartOfNav title={title} to={to} description={description} isComing={false} />
        </a>
    );
}

export function PartOfNav({ title, description, isComing }: NavListItemProps) {
    return (
        <>
            <div
                className={`${
                    isComing ? 'items-start' : 'items-center'
                } flex gap-2 text-white order-none group-hover:text-funded-90 hover:text-funded-90 w-full`}>
                <span className={`${isComing ? 'lg:w-[130px] xl:w-max' : 'w-auto'} order-none`}>{title}</span>
                {isComing && (
                    <span className="flex-none text-funded-150 text-[11px] leading-[14px] font-normal order-1 self-stretch py-0.5 px-1 bg-comingSoon h-max rounded-full">
                        Coming soon
                    </span>
                )}
                <ArrowRightIcon className="w-[18px] h-[18px] order-2" />
            </div>
            <div className="text-sm leading-[17.5px] text-funded-400 font-normal order-1 self-stretch group-hover:text-white">
                {description}
            </div>
        </>
    );
}

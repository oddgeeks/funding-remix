import { navLists } from '~/utils/nav-lists';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from '@remix-run/react';
import { HeaderNavListItem } from './HeaderNavListItem';
import { v4 as uuidv4 } from 'uuid';

export interface NavListProps {
    title: string;
    to?: string;
    lists?: NavListItemProps[];
    type?: 'external' | 'internal';
}

export interface NavListItemProps {
    title: string;
    to: string;
    description: string;
    isComing?: boolean;
    type?: 'external' | 'internal';
}

export const HeaderNav = () => {
    return (
        <ul className="items-center self-stretch justify-center order-1 hidden gap-6 grow lg:flex">
            {navLists.map((list) => (
                <NavLink key={uuidv4()} title={list.title} lists={list.lists} to={list.to} type={list.type} />
            ))}
        </ul>
    );
};

const NavLink = ({ title, to, lists, type }: NavListProps) => {
    return (
        <Fragment>
            <li>
                {type === 'external' ? (
                    <a
                        href={to}
                        target="_blank"
                        className={`text-center block hover:text-funded-90 items-center gap-2 font-bold cursor-pointer text-white focus:ring-0 focus:border-0 focus:outline-none`}>
                        {title}
                    </a>
                ) : (
                    <Popover>
                        {({ open }) => (
                            <Fragment>
                                <Popover.Button
                                    className={`flex hover:text-funded-90 items-center gap-2 font-bold cursor-pointer ${
                                        open ? 'text-funded-90' : 'text-white'
                                    } focus:ring-0 focus:border-0 focus:outline-none`}>
                                    {to ? <Link to={to}>{title}</Link> : <span>{title}</span>}
                                    {lists && (
                                        <ChevronDownIcon
                                            className={
                                                open ? 'rotate-180 transform w-[18px] h-[18px]' : 'w-[18px] h-[18px]'
                                            }
                                            aria-hidden
                                        />
                                    )}
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1">
                                    <div className="flex items-center gap-8 absolute top-[82px] left-0 bg-[#1c1c1c] border-y border-[#767779] w-full">
                                        <div className="mx-auto max-w-screen-2xl">
                                            <Popover.Panel className="grow">
                                                <div className="grid grid-flow-col auto-cols-fr">
                                                    {lists &&
                                                        lists?.map((list) => (
                                                            <HeaderNavListItem
                                                                key={list.to}
                                                                to={list.to}
                                                                title={list.title}
                                                                description={list.description}
                                                                isComing={list.isComing}
                                                                type={list.type}
                                                            />
                                                        ))}
                                                </div>
                                            </Popover.Panel>
                                        </div>
                                    </div>
                                </Transition>
                            </Fragment>
                        )}
                    </Popover>
                )}
            </li>
        </Fragment>
    );
};

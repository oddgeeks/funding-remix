import { useState, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from '@remix-run/react';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

import { navLists } from '~/utils/nav-lists';
import { HeaderLogo } from './headerLogo';
import { LoginDialog } from '~/components/organisms/LoginDialog';
import { NavListItemProps, NavListProps } from './headerNav';
import { ExternalLink, InternalLink } from './utils';

interface SidebarProps {
    onClose: () => void;
}
export const SideBar = ({ onClose }: SidebarProps) => {
    const [LoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
    return (
        <div className="fixed inset-x-0 top-0 z-50 flex flex-col items-center w-full h-full text-white origin-top-right bg-funded-600">
            <div className="flex items-center justify-between w-full px-6 py-4">
                <HeaderLogo />
                <span
                    className="flex items-center grow-0 justify-center rounded-lg gap-2 bg-funded-90 w-[42px] h-[42px] text-[#0F172A]"
                    onClick={onClose}>
                    <XMarkIcon className="w-6 h-6" />
                </span>
            </div>
            <div className="flex flex-col w-full py-6 bg-funded-600">
                <ul className="flex flex-col items-start self-stretch grow divide-y divide-[#4C4E50] w-full">
                    {navLists.map((list) => (
                        <NavLink key={uuidv4()} title={list.title} lists={list.lists} to={list.to} type={list.type} />
                    ))}
                </ul>

                <Link
                    to="https://myfundedfx.tech/account/register/"
                    target="_blank"
                    className="pt-6 text-funded-90 flex items-center justify-center mb-6 text-xl font-bold leading-[25px] border-t border-[#4C4E50]">
                    Get funded
                </Link>

                <p className="text-white text-center text-xl font-bold leading-[25px]">
                    Existing Customer?{' '}
                    <button type="button" onClick={() => setLoginDialogOpen(true)} className="text-funded-90">
                        Sign in
                    </button>
                </p>

                <LoginDialog openDialog={LoginDialogOpen} setLoginDialogOpen={setLoginDialogOpen} />
            </div>
        </div>
    );
};

const NavLink = ({ title, to, lists, type }: NavListProps) => {
    console.log(type);
    return (
        <Fragment>
            <li className="w-full px-4 py-6">
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
                                    className={`w-full flex hover:text-funded-90 justify-center items-center text-xl font-bold leading-[25px] gap-2 cursor-pointer${
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
                                    <div className="w-full mt-6">
                                        <Popover.Panel>
                                            <div className="flex flex-col items-start divide-y divide-[#4C4E50]">
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
                                </Transition>
                            </Fragment>
                        )}
                    </Popover>
                )}
            </li>
        </Fragment>
    );
};

const HeaderNavListItem = ({ title, to, description, isComing, type }: NavListItemProps) => {
    return type === 'external' ? (
        <ExternalLink title={title} to={to} description={description} isComing={isComing} />
    ) : (
        <InternalLink title={title} to={to} description={description} isComing={isComing} />
    );
};

import { useState, Fragment } from 'react';
// import { useDetectClickOutside } from 'react-detect-click-outside';

import { Bars3Icon } from '@heroicons/react/24/solid';
import { SideBar } from './sidebar';

export const MobileNav = () => {
    const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
    // const handleClose = useCallback((e: Event) => {
    //     e.stopPropagation();
    //     setOpenMobileNav(false);
    // }, []);
    // const ref = useDetectClickOutside({ onTriggered: handleClose });

    return (
        <Fragment>
            <div className="flex lg:hidden order-2 justify-end items-center gap-8 w-[42px] h-[42px]">
                <span
                    className="flex items-center justify-center rounded-lg gap-2 bg-funded-90 w-full h-full text-[#0F172A]"
                    onClick={() => {
                        setOpenMobileNav(true);
                    }}>
                    <Bars3Icon className="w-6 h-6" />
                </span>
            </div>
            {openMobileNav && <SideBar onClose={() => setOpenMobileNav(false)} />}
        </Fragment>
    );
};

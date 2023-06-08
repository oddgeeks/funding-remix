import { useScrollDirection } from 'react-use-scroll-direction';

import { HeaderCTAs } from './headerCTAs';
import { HeaderLogo } from './headerLogo';
import { HeaderNav } from './headerNav';
import { MobileNav } from './mobileNav';

interface HeaderProps {
    className?: string;
}

export const NavBar = ({ className }: HeaderProps) => {
    const { isScrollingDown, isScrolling } = useScrollDirection();

    return (
        <div
            data-testid="mffx-header-wrapper"
            className={`${
                isScrollingDown && isScrolling ? 'bg-funded-600' : 'bg-funded-600/70'
            } sticky top-0 backdrop-blur z-50 border-b border-[#4C4E50] ${className}`}>
            <div className="px-6 mx-auto md:container">
                <div className="md:mx-auto">
                    <nav className="flex items-center justify-between gap-8 py-4">
                        <HeaderLogo />
                        <HeaderNav />
                        <HeaderCTAs />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </div>
    );
};

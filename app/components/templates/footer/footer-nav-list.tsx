import React from 'react';
import { Link } from '@remix-run/react';
import { v4 as uuidv4 } from 'uuid';

interface FooterNavListItemProps {
    to: string;
    className?: string;
    text: string;
    type?: string;
}

interface FooterNavListProps {
    items: FooterNavListItemProps[];
}

export const FooterNavListItem: React.FC<FooterNavListItemProps> = ({ to, text, className = '', type }) => {
    return type === 'external' ? (
        <ExternalLinkFooter to={to} text={text} className={className} />
    ) : (
        <InternalLinkFooter to={to} text={text} className={className} />
    );
};

export const FooterNavList: React.FC<FooterNavListProps> = ({ items }) => {
    return (
        <div className="flex flex-col gap-y-8 w-fit">
            {items &&
                items.map((item) => (
                    <FooterNavListItem
                        key={uuidv4()}
                        to={item.to}
                        text={item.text}
                        className={item.className}
                        type={item.type}
                    />
                ))}
        </div>
    );
};

export function InternalLinkFooter({ to, text, className = '' }: FooterNavListItemProps) {
    return (
        <Link to={to} className={`text-white underline text-xl font-medium w-full hover:text-funded-80 ${className}`}>
            {text}
        </Link>
    );
}

export function ExternalLinkFooter({ to, text, className = '' }: FooterNavListItemProps) {
    return (
        <a href={to} className={`text-white underline text-xl font-medium w-full hover:text-funded-80 ${className}`}>
            {text}
        </a>
    );
}

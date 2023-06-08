import { NavListItemProps } from './headerNav';
import { ExternalLink, InternalLink } from './utils';

export const HeaderNavListItem = ({ title, to, description, isComing, type = 'internal' }: NavListItemProps) => {
    return type === 'external' ? (
        <ExternalLink title={title} to={to} description={description} isComing={isComing} />
    ) : (
        <InternalLink title={title} to={to} description={description} isComing={isComing} />
    );
};

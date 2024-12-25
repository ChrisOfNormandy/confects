import './styles/social-link.scss';
import { BrandName, brands } from '#types/brands';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';
import { HTML_AnchorProps } from '#types/html';
import { Icon } from '$/decorations';
import { BrandButtonProps } from '../brand/BrandButton';

export type SocialLinkProps = {
    anchor?: HTML_AnchorProps
} & BrandButtonProps;

export function SocialLink(
    {
        anchor,
        ...props
    }: SocialLinkProps
) {
    if (anchor) {
        return <a
            className='social-link-anchor'
            {...anchor}
        >
            <BrandButton
                {...props}
            />
        </a>
    }

    return <BrandButton
        {...props}
    />
}
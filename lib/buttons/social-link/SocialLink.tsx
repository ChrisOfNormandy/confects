import { HTML_AnchorProps } from 'lib/types';
import { BrandButton, BrandButtonProps } from 'lib/buttons';

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
        </a>;
    }

    return <BrandButton
        {...props}
    />;
}
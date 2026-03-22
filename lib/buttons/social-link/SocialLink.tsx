import { HTML_AnchorProps } from '>types/html';
import { BrandButton, BrandButtonProps } from '>buttons/brand/BrandButton';

export interface SocialLinkProps extends BrandButtonProps {
    anchor?: HTML_AnchorProps
}

export function SocialLink(
    {
        anchor,
        ...props
    }: Readonly<SocialLinkProps>
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
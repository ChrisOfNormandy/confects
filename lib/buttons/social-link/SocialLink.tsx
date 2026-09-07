import { BrandButton, type BrandButtonProps } from '>buttons/brand/BrandButton';
import type { HtmlElementProps } from '>types/html';

export interface SocialLinkProps extends BrandButtonProps {
    anchor?: HtmlElementProps<'a'>;
}

export function SocialLink({ anchor, ...props }: Readonly<SocialLinkProps>) {
    if (anchor) {
        return (
            <a className='social-link-anchor' {...anchor}>
                <BrandButton {...props} />
            </a>
        );
    }

    return <BrandButton {...props} />;
}

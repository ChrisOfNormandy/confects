import './styles/social-link.scss';
import { BrandName, brands } from '#types/brands';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';
import { Icon } from '$/decorations';

interface extBrandButtonProps {
    brand: BrandName
    fill?: boolean
    withLabel?: boolean
}

type BrandButtonProps = ButtonProps & extBrandButtonProps

function BrandButton(
    {
        brand,
        fill,
        className,
        withLabel = false,
        ...props
    }: BrandButtonProps
) {
    const text = brands[brand];

    return <Button
        noDefaultClassName
        className={getClassName('social-link', brand, fill && 'fill', className, withLabel && 'with-label')}
        {...props}
    >
        <Icon
            icon={brand}
        />

        {
            withLabel &&
            <span
                className='brand-name'
            >
                {text}
            </span>
        }
    </Button>
}

interface extSocialLinkProps {
    profileHref?: string
    pageHref?: string
}

export type SocialLinkProps = BrandButtonProps & extSocialLinkProps;

export function SocialLink(
    {
        profileHref,
        pageHref,
        ...props
    }: SocialLinkProps
) {
    if (profileHref || pageHref) {
        return <a
            className='social-link-anchor'
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
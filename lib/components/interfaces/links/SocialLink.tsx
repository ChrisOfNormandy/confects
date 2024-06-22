import './styles/social-link.scss';
import { BrandName, brands } from './brands';
import { getClassName } from '../../../helpers/components';
import Button, { ButtonProps } from '../buttons/Button';
import { Icon } from '../../icons';

interface extBrandButtonProps {
    brand: BrandName
    fill?: boolean
    withLabel?: boolean
}

export type BrandButtonProps = ButtonProps & extBrandButtonProps

function BrandButton(
    {
        brand,
        fill,
        withLabel = false
    }: BrandButtonProps
) {
    const text = brands[brand];

    return <Button
        className={getClassName('social-link', 'btn', brand, fill && 'fill')}
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

export default function SocialLink(
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
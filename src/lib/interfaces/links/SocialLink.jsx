import './styles/social-link.scss';
import { Button } from '../buttons/Button';
import { Icon } from '../../icon/Icon';
import { combineClassNames } from '../../../helpers/props';
import { brands, overrides } from './brands';

function BrandButton(
    {
        brand,
        fill,
        withLabel = false
    }
) {
    return <Button
        styleType='custom'
        className={combineClassNames('social-link', 'btn', brand, fill && 'fill')}
    >
        {
            overrides[brand] === undefined
                ? <Icon
                    icon={brand}
                />
                : overrides[brand]()
        }

        {
            withLabel &&
            <span
                className='brand-name'
            >
                {brands[brand]}
            </span>
        }
    </Button>
}

export default function SocialLink(
    {
        profileHref,
        pageHref,
        ...props
    }
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
import './styles/brand-button.scss';
import { BrandName, brands } from '#types/brands';
import { Button, ButtonProps } from '$/buttons';
import { getClassName } from '$/helpers';
import { Icon } from '$/decorations';

export type BrandButtonProps = {
    brand: BrandName
    fill?: boolean
    withLabel?: boolean
} & ButtonProps;

export function BrandButton(
    {
        brand,
        children,
        className,
        fill,
        withLabel = false,
        ...props
    }: BrandButtonProps
) {
    return <Button
        noDefaultClassName
        className={getClassName('brand-btn', brand, fill && 'fill', className, withLabel && 'with-label')}
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
                {brands[brand]}
            </span>
        }

        {children}
    </Button>
}
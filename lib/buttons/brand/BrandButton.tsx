import './styles/brand-button.scss';
import { BrandName, brands } from '>types/brands';
import { Button, ButtonProps } from '>buttons/button/Button';
import { getClassName } from '@dead-harbour/shipshape/props';
import { Icon } from '>decorations/icon/Icon';

export interface BrandButtonProps extends ButtonProps {
    brand: BrandName
    fill?: boolean
    withLabel?: boolean
}

export function BrandButton(
    {
        brand,
        children,
        className,
        fill,
        withLabel = false,
        ...props
    }: Readonly<BrandButtonProps>
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
    </Button>;
}
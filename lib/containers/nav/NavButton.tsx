import { Button, ButtonProps } from '>buttons/button/Button';
import { getClassName } from '@syren-dev-tech/concauses/props';

export interface NavButtonProps extends ButtonProps { }

export function NavButton(
    {
        className,
        children,
        ...props
    }: Readonly<NavButtonProps>
) {
    return <Button
        className={getClassName('nav-btn', className)}
        {...props}
    >
        {children}
    </Button>;
}
import { Button, type ButtonProps } from '>buttons/button/Button';
import { getClassName } from '@dead-harbour/shipshape/props';

export type NavButtonProps = ButtonProps;

export function NavButton({ className, children, ...props }: Readonly<NavButtonProps>) {
    return (
        <Button className={getClassName('nav-btn', className)} {...props}>
            {children}
        </Button>
    );
}

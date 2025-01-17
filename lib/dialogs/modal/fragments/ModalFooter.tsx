import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';

export type ModalFooterProps = HTML_DivProps & ThemeProps;

export function ModalFooter(
    {
        children,
        className,
        theme,
        ...props
    }: ModalFooterProps
) {
    return <div
        className={getClassName('modal-footer', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>;
}
import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';

export type ModalHeaderProps = HTML_DivProps & ThemeProps;

export function ModalHeader(
    {
        children,
        className,
        theme,
        ...props
    }: ModalHeaderProps
) {
    return <div
        className={getClassName('modal-header', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>;
}
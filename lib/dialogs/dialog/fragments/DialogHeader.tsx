import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';
import './styles/dialog-header.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from "lib/types"

export type DialogHeaderProps = HTML_DivProps & ThemeProps;

export function DialogHeader(
    {
        children,
        className,
        theme,
        ...props
    }: DialogHeaderProps
) {
    return <div
        className={getClassName('dialog-header', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>
}
import './styles/dialog-body.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';

export type DialogBodyProps = HTML_DivProps & ThemeProps;

export function DialogBody(
    {
        children,
        className,
        theme,
        ...props
    }: DialogBodyProps
) {
    return <div
        className={getClassName('dialog-body', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>;
}
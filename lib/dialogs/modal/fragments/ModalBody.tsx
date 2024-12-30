import './styles/dialog-body.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';

export type ModalBodyProps = HTML_DivProps & ThemeProps;

export function ModalBody(
    {
        children,
        className,
        theme,
        ...props
    }: ModalBodyProps
) {
    return <div
        className={getClassName('modal-body', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>
}
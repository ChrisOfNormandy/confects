import './styles/divider.scss';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { getClassName } from '@syren-dev-tech/concauses/props';

export type DividerType = 'horizontal' | 'vertical' | 'whitespace';

export interface DividerProps extends HTML_DivProps, ThemeProps {
    type?: DividerType
}

export function Divider(
    {
        className,
        type = 'horizontal',
        theme,
        ...props
    }: Readonly<DividerProps>
) {
    return <div
        className={getClassName('divider', type, theme?.toClassName(), className)}
        {...props}
    />;
}
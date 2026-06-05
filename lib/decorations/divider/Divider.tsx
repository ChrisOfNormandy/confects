import './styles/divider.scss';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

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
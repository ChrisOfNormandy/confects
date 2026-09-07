import './styles/divider.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';

export type DividerType = 'horizontal' | 'vertical' | 'whitespace';

export interface DividerProps extends HtmlElementProps<'div'>, ThemeProps {
    type?: DividerType;
}

export function Divider({ className, type = 'horizontal', theme, ...props }: Readonly<DividerProps>) {
    return <div className={getClassName('divider', type, theme?.toClassName(), className)} {...props} />;
}

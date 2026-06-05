import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import './styles/page-header.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps } from '>types/html';

export interface PageHeaderProps extends HTML_DivProps, ThemeProps { }

export function PageHeader(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<PageHeaderProps>
) {
    return <div
        className={getClassName('page-header', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}
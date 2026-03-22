import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import './styles/page-header.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
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
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import './styles/page-body.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';

export interface PageBodyProps extends HTML_DivProps, ThemeProps { }

export function PageBody(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<PageBodyProps>
) {
    return <div
        className={getClassName('page-body', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import './styles/page.scss';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';

export interface PageProps extends HTML_DivProps, ThemeProps { }

export function Page(
    {
        className,
        children,
        theme,
        ...props
    }: Readonly<PageProps>
) {
    return <div
        className={getClassName('page', theme?.toClassName(), className)}
        {...props}
    >
        {children}
    </div>;
}
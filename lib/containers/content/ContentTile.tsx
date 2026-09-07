import './styles/content-tile.scss';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';
import type { ReactNode } from 'react';

export interface FigureOptions {
    caption?: ReactNode;
    href?: string;
    image: string;
    imageOptions?: HtmlElementProps<'img'>;
}

export interface ContentTileProps extends HtmlElementProps<'div'>, ThemeProps {
    figure?: FigureOptions;
}

export function ContentTile({ className, children, figure, theme, ...props }: Readonly<ContentTileProps>) {
    return (
        <div className={getClassName('content-tile', theme?.toClassName(), className)} {...props}>
            {figure && (
                <figure>
                    <img alt='content-tile' {...figure.imageOptions} src={figure.image} />

                    {figure.caption && <figcaption>{figure.href ? <a href={figure.href}>{figure.caption}</a> : figure.caption}</figcaption>}
                </figure>
            )}

            {children}
        </div>
    );
}

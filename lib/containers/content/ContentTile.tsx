import { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import './styles/content-tile.scss';
import { getClassName } from '@dead-harbour/shipshape/props';
import { HTML_DivProps, HTML_ImageProps } from '>types/html';
import { ReactNode } from 'react';

export interface FigureOptions {
    caption?: ReactNode
    href?: string
    image: string
    imageOptions?: HTML_ImageProps
}

export interface ContentTileProps extends HTML_DivProps, ThemeProps {
    figure?: FigureOptions
}

export function ContentTile(
    {
        className,
        children,
        figure,
        theme,
        ...props
    }: Readonly<ContentTileProps>
) {
    return <div
        className={getClassName('content-tile', theme?.toClassName(), className)}
        {...props}
    >
        {
            figure &&
            <figure>
                <img
                    alt='content-tile'
                    {...figure.imageOptions}
                    src={figure.image}
                />

                {
                    figure.caption &&
                    <figcaption>
                        {
                            figure.href
                                ? <a
                                    href={figure.href}
                                >
                                    {figure.caption}
                                </a>
                                : figure.caption
                        }
                    </figcaption>
                }
            </figure>
        }

        {children}
    </div>;
}
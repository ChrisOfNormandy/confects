import './styles/content-tile.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps, HTML_ImageProps } from '#types/html';
import { ReactNode } from "react";

export type FigureOptions = {
    image: string
    imageOptions?: HTML_ImageProps
    caption?: ReactNode
    href?: string
}

export type ContentTileProps = HTML_DivProps & {
    figure?: FigureOptions
};

export function ContentTile(
    {
        className,
        children,
        figure,
        ...props
    }: ContentTileProps
) {
    return <div
        className={getClassName('content-tile', className)}
        {...props}
    >
        {
            figure &&
            <figure>
                <img
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
    </div>
}
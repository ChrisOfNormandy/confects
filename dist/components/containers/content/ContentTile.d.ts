import './styles/content-tile.scss';
import { HTML_DivProps, HTML_ImageProps } from '../../../types/html';
import { ReactNode } from "react";
export type FigureOptions = {
    image: string;
    imageOptions?: HTML_ImageProps;
    caption?: ReactNode;
    href?: string;
};
export type ContentTileProps = HTML_DivProps & {
    figure?: FigureOptions;
};
export declare function ContentTile({ className, children, figure, ...props }: ContentTileProps): import("react/jsx-runtime").JSX.Element;

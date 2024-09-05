import './styles/content-tile-group.scss';
import { ContentTileProps } from './ContentTile';
import { HTML_DivProps } from '../../../types/html';
export type ContentTileGroupProps = HTML_DivProps & {
    tiles?: ContentTileProps[];
    perRow?: number;
};
export declare function ContentTileGroup({ className, children, tiles, perRow, ...props }: ContentTileGroupProps): import("react/jsx-runtime").JSX.Element;

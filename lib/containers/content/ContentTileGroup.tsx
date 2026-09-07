import './styles/content-tile-group.scss';
import { ContentTile, type ContentTileProps } from '>containers/content/ContentTile';
import type { HtmlElementProps } from '>types/html';
import type { ThemeProps } from '@dead-harbour/scss-rigging/themes';
import { getClassName } from '@dead-harbour/shipshape/props';
import { uniqueKey } from '@dead-harbour/shipshape/strings';

export interface ContentTileGroupProps extends HtmlElementProps<'div'>, ThemeProps {
    tiles?: ContentTileProps[];
    perRow?: number;
}

const DEFAULT_TILES_PER_ROW = 3;

export function ContentTileGroup({ className, children, tiles, theme, perRow = DEFAULT_TILES_PER_ROW, ...props }: Readonly<ContentTileGroupProps>) {
    const groups: ContentTileProps[][] = [];

    if (tiles) {
        let i = 0;
        let grouping = tiles.slice(i * perRow, perRow * (i + 1));
        while (grouping.length) {
            console.log(grouping.length);
            groups.push(grouping);

            i++;

            grouping = tiles.slice(i * perRow, perRow * (i + 1));
        }
    }

    return (
        <div className={getClassName('content-tile-group', theme?.toClassName(), className)} {...props}>
            {groups.map((grouping) => (
                <div key={uniqueKey()} className='content-tile-grouping'>
                    {grouping.map((tileProps) => (
                        <ContentTile key={uniqueKey()} {...tileProps} />
                    ))}
                </div>
            ))}

            {children}
        </div>
    );
}

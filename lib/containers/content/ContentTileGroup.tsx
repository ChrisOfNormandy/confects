import './styles/content-tile-group.scss';
import { ContentTile, ContentTileProps } from './ContentTile';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';

export type ContentTileGroupProps = HTML_DivProps & {
    tiles?: ContentTileProps[]
    perRow?: number
};

export function ContentTileGroup(
    {
        className,
        children,
        tiles,
        perRow = 3,
        ...props
    }: ContentTileGroupProps
) {

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

    return <div
        className={getClassName('content-tile-group', className)}
        {...props}
    >
        {
            groups.map((grouping, i) =>
                <div
                    key={i}
                    className='content-tile-grouping'
                >
                    {grouping.map((tileProps, k) =>
                        <ContentTile
                            key={k}
                            {...tileProps}
                        />
                    )}
                </div>
            )
        }

        {children}
    </div>;
}
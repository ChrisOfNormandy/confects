import './styles/content-tile-group.scss';
import { ContentTile, ContentTileProps } from '>containers/content/ContentTile';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { HTML_DivProps } from '>types/html';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { uniqueKey } from '@syren-dev-tech/concauses/strings';

export interface ContentTileGroupProps extends HTML_DivProps, ThemeProps {
    tiles?: ContentTileProps[]
    perRow?: number
}

const DEFAULT_TILES_PER_ROW = 3;

export function ContentTileGroup(
    {
        className,
        children,
        tiles,
        theme,
        perRow = DEFAULT_TILES_PER_ROW,
        ...props
    }: Readonly<ContentTileGroupProps>
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
        className={getClassName('content-tile-group', theme?.toClassName(), className)}
        {...props}
    >
        {
            groups.map((grouping) =>
                <div
                    key={uniqueKey()}
                    className='content-tile-grouping'
                >
                    {grouping.map((tileProps) =>
                        <ContentTile
                            key={uniqueKey()}
                            {...tileProps}
                        />
                    )}
                </div>
            )
        }

        {children}
    </div>;
}
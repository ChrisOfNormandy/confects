import './styles/toggle.scss';
import { Glyph, GlyphProps } from 'lib/buttons';
import { useState } from 'react';

export type ToggleIconType =
    'check-dot' |
    'check-square' |
    'check-x' |
    'check' |
    'dot' |
    'eye' |
    'power' |
    'square' |
    'sun-moon' |
    'thumb-down' |
    'thumb-up' |
    'toggle' |
    'x-dot' |
    'x-square' |
    'x';

const mapping = new Map<ToggleIconType, [string, string]>(
    [
        ['check-dot', ['circle', 'check-circle']],
        ['check-square', ['square', 'check-square']],
        ['check-x', ['x', 'check']],
        ['check', ['dot', 'check']],
        ['dot', ['circle', 'circle-fill']],
        ['eye', ['eye-slash', 'eye']],
        ['power', ['power', 'power']],
        ['square', ['square', 'square-fill']],
        ['sun-moon', ['moon', 'sun']],
        ['thumb-down', ['hand-thumbs-down', 'hand-thumbs-down-fill']],
        ['thumb-up', ['hand-thumbs-up', 'hand-thumbs-up-fill']],
        ['toggle', ['toggle-off', 'toggle-on']],
        ['x-dot', ['circle', 'x-circle']],
        ['x-square', ['square', 'x-square']],
        ['x', ['dot', 'x']]
    ]
);

export type ToggleProps = {
    name?: string
    readOnly?: boolean
    icon: ToggleIconType
} & GlyphProps;

export function Toggle(
    {
        defaultChecked,
        icon = 'check',
        name,
        readOnly,
        ...props
    }: ToggleProps
) {

    const [value, setValue] = useState(defaultChecked);

    const iconSet = mapping.get(icon);
    if (!iconSet)
        throw new Error(`Unsupported icon type: ${icon}`);

    const useIcon = value && iconSet[1] || iconSet[0];

    return <>
        <input
            name={name}
            value={Number(value) || 0}
            readOnly
            hidden
        />

        <Glyph
            disabled={readOnly}
            {...props}
            icon={useIcon}
            onClick={() => setValue(!value)}
            tooltip={value ? 'Enabled' : 'Disabled'}
        />
    </>;
}
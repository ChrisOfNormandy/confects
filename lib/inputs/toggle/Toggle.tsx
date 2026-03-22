import './styles/toggle.scss';
import { Glyph, GlyphProps } from '>buttons/glyph/Glyph';
import { useState } from 'react';
import { type ToggleIconType, mapping } from './toggle';

export interface ToggleProps extends GlyphProps {
    name?: string
    readOnly?: boolean
    icon: ToggleIconType
}

export function Toggle(
    {
        defaultChecked,
        icon = 'check',
        name,
        readOnly,
        ...props
    }: Readonly<ToggleProps>
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
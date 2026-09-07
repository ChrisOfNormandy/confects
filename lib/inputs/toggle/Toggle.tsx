import './styles/toggle.scss';
import { Glyph, type GlyphProps } from '>buttons/glyph/Glyph';
import { useState } from 'react';

import { type ToggleIconType, toggleIcons } from './toggle';

export interface ToggleProps extends GlyphProps {
    name?: string;
    readOnly?: boolean;
    icon: ToggleIconType;
}

export function Toggle({ defaultChecked, icon, name, readOnly, ...props }: Readonly<ToggleProps>) {
    const [value, setValue] = useState(defaultChecked);

    const iconSet = toggleIcons[icon];
    if (!iconSet) throw new Error(`Unsupported icon type: ${icon}`);

    const useIcon = (value && iconSet.on) || iconSet.off;

    return (
        <>
            <input name={name} value={Number(value) || 0} readOnly hidden />

            <Glyph disabled={readOnly} {...props} icon={useIcon} onClick={() => setValue(!value)} />
        </>
    );
}

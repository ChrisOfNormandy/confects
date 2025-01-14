import './styles/toggle.scss';
import { Button } from 'lib/buttons';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { Icon } from 'lib/decorations';
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
        ['check', ['', 'check']],
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
        ['x', ['', 'x']]
    ]
);

interface extToggleProps {
    name?: string
    readOnly?: boolean
    iconType?: ToggleIconType
}

export type ToggleProps = HTML_DivProps & extToggleProps;

export function Toggle(
    {
        className,
        defaultChecked,
        name,
        iconType = 'check',
        readOnly,
        ...props
    }: ToggleProps
) {

    const [value, setValue] = useState(defaultChecked);

    const iconSet = mapping.get(iconType);
    if (!iconSet)
        throw new Error(`Unsupported icon type: ${iconType}`);

    return <div
        className={getClassName('input toggle', className)}
        {...props}
    >
        <input
            name={name}
            value={Number(value) || 0}
            readOnly
            hidden
        />

        <Button
            onClick={() => setValue(!value)}
            disabled={readOnly}
        >
            <Icon
                icon={value && iconSet[1] || iconSet[0]}
            />
        </Button>
    </div>;
}
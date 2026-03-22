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

export const mapping = new Map<ToggleIconType, [string, string]>(
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
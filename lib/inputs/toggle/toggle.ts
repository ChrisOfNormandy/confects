export const toggleIcons = {
    check: {
        off: 'dot',
        on: 'check'
    },
    'check-dot': {
        off: 'circle',
        on: 'check-circle'
    },
    'check-square': {
        off: 'square',
        on: 'check-square'
    },
    'check-x': {
        off: 'x',
        on: 'check'
    },
    dot: {
        off: 'circle',
        on: 'circle-fill'
    },
    eye: {
        off: 'eye-slash',
        on: 'eye'
    },
    power: {
        off: 'power',
        on: 'power'
    },
    square: {
        off: 'square',
        on: 'square-fill'
    },
    'sun-moon': {
        off: 'moon',
        on: 'sun'
    },
    'thumb-down': {
        off: 'hand-thumbs-down',
        on: 'hand-thumbs-down-fill'
    },
    'thumb-up': {
        off: 'hand-thumbs-up',
        on: 'hand-thumbs-up-fill'
    },
    toggle: {
        off: 'toggle-off',
        on: 'toggle-on'
    },
    x: {
        off: 'dot',
        on: 'x'
    },
    'x-dot': {
        off: 'circle',
        on: 'x-circle'
    },
    'x-square': {
        off: 'square',
        on: 'x-square'
    }
};

export type ToggleIconType = keyof typeof toggleIcons;

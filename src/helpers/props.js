export function combineClassNames(...names) {
    return names.filter(Boolean).join(' ');
}
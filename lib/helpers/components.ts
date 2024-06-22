export function getClassName(...classes: (string | undefined | boolean)[]) {
    return classes.filter(Boolean).join(' ');
}
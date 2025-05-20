const SIZES = [
    'b',
    'kb',
    'mb',
    'gb'
];
const KILO = 1024;
const FS_FIXED = 2;

export function fileSizeDisplay(n: number) {
    let i = 0;
    let k = n;
    while (i < SIZES.length && k > KILO) {
        i++;
        k /= KILO;
    }

    return `${k.toFixed(FS_FIXED)} ${SIZES[i]}`;
}
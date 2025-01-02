const SIZES = ['b', 'kb', 'mb', 'gb'];
const KILO = 1024;

export function fileSizeDisplay(n: number) {
    let i = 0;
    let k = n;
    while (i < SIZES.length && k > KILO) {
        i++;
        k /= KILO;
    }

    return `${k.toFixed(2)} ${SIZES[i]}`;
}
import { v4 } from 'uuid';
import { mouseEvent } from './events';

export const USE_HOVER_STYLING = 'hvr';
export const USE_DISABLED_STYLING = 'dis';

export function getClassName(...classes: (string | undefined | boolean)[]) {
    return classes.filter(Boolean).join(' ');
}

export function makeDraggable(id: string) {
    const origin = {
        x: 0,
        y: 0
    };
    const target = {
        x: 0,
        y: 0
    };

    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault();

        target.x = origin.x - e.clientX;
        target.y = origin.y - e.clientY;
        origin.x = e.clientX;
        origin.y = e.clientY;

        const elem = document.getElementById(id);
        if (!elem)
            throw new Error('Undefined element');

        elem.style.top = `${elem.offsetTop - target.y}px`;
        elem.style.left = `${elem.offsetLeft - target.x}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    };

    const onMouseDown = mouseEvent((e) => {
        e.preventDefault();

        origin.x = e.clientX;
        origin.y = e.clientY;

        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
    });

    return { onMouseDown };
}

let uniqueIdC = 0;
export function uniqueId(prefix?: string) {
    uniqueIdC++;

    if (prefix)
        return prefix + uniqueIdC;

    return uniqueIdC.toString();
}

export function uniqueKey(prefix?: string) {
    if (prefix)
        return prefix + v4();

    return v4();
}
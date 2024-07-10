import './theme-preview.scss';
import { categoryList, paletteList } from './helpers/test-content';
import { getClassName } from '@lib/main';
import { useEffect, useState } from 'react';

export default function ThemePreview() {

    const [t, setT] = useState(0);
    const [ready, isReady] = useState(false);

    useEffect(() => {
        const theme = paletteList[t];
        if (!theme)
            throw new Error('Undefined theme')

        document.body.classList.remove(...paletteList);
        document.body.classList.add(theme);
        isReady(false);
    }, [t]);

    useEffect(() => {
        if (!ready)
            isReady(true);
    }, [ready]);

    const getStyle = (id: string) => {
        const elem = document.getElementById(id);
        if (elem)
            return window.getComputedStyle(elem, null).getPropertyValue('background-color')

        return id;
    }

    return <div
        className='theme-preview'
    >
        <h3>
            Theme Preview
        </h3>

        <button
            onClick={() => {
                if (t >= paletteList.length - 1)
                    setT(0);
                else
                    setT(t + 1)
            }}
            onContextMenu={(e) => {
                e.preventDefault();

                if (t <= 0)
                    setT(paletteList.length - 1);
                else
                    setT(t - 1)
            }}
        >
            THEME: {paletteList[t]}
        </button>

        <div
            className='theme-preview-block'
        >
            <div
                className='block-row'
            >
                {
                    categoryList.map((n) => {
                        const className = `f-${n}`;

                        return <div
                            key={n}
                            id={className}
                            className={getClassName('block', className)}
                        >
                            <span>
                                {className}
                            </span>

                            <span>
                                {getStyle(className)}
                            </span>
                        </div>
                    })
                }
            </div>

            <div
                className='block-row'
            >
                {
                    categoryList.map((n) => {
                        const className = `f-${n}-i`;

                        return <div
                            key={n}
                            id={className}
                            className={getClassName('block', className)}
                        >
                            <span>
                                {className}
                            </span>

                            <span>
                                {getStyle(className)}
                            </span>
                        </div>
                    })
                }
            </div>

            <div
                className='block-row'
            >
                {
                    categoryList.map((n) => {
                        const className = `f-${n}-c`;

                        return <div
                            key={n}
                            id={className}
                            className={getClassName('block', className)}
                        >
                            <span>
                                {className}
                            </span>

                            <span>
                                {getStyle(className)}
                            </span>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
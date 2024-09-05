import './theme-preview.scss';
import { getClassName } from '$/helpers';
import { themeCategories, themes } from '#types/themes';
import { useEffect, useState } from 'react';

export function ThemePreview() {

    const [t, setT] = useState(0);
    const [ready, isReady] = useState(false);

    useEffect(() => {
        const theme = themes[t];
        if (!theme)
            throw new Error('Undefined theme')

        document.body.classList.remove(...themes);
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
                if (t >= themes.length - 1)
                    setT(0);
                else
                    setT(t + 1)
            }}
            onContextMenu={(e) => {
                e.preventDefault();

                if (t <= 0)
                    setT(themes.length - 1);
                else
                    setT(t - 1)
            }}
        >
            THEME: {themes[t]}
        </button>

        <div
            className='theme-preview-block'
        >
            <div
                className='block-row'
            >
                {
                    themeCategories.map((n) => {
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
                    themeCategories.map((n) => {
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
                    themeCategories.map((n) => {
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
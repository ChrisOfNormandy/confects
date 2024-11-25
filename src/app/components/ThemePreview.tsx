import './theme-preview.scss';
import { getClassName } from '$/helpers';
import { useEffect, useState } from 'react';
import { themes } from '@chrisofnormandy/confetti/themes';

export function ThemePreview() {

    const [t, setT] = useState(0);
    const [ready, isReady] = useState(false);

    useEffect(() => {
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

        <button>
            THEME: {themes.getTheme()}
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
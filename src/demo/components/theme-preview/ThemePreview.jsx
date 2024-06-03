import './styles/theme-preview.scss';
import { palettes } from '@chrisofnormandy/confetti';
import { useEffect, useState } from 'react';

const paletteList = [...palettes, 'test'];

export default function ThemePreview() {

    const [t, setT] = useState(0);
    const [ready, isReady] = useState(false);

    useEffect(() => {
        document.body.classList.remove(...paletteList);
        document.body.classList.add(paletteList[t]);
        isReady(false);
    }, [t]);

    useEffect(() => {
        if (!ready)
            isReady(true);
    }, [ready])

    const getStyle = (id) => {
        const elem = document.getElementById(id);
        if (elem)
            return window.getComputedStyle(elem, null).getPropertyValue('background-color')

        return id;
    }

    return <div>
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

        <table>
            <thead>
                <tr>
                    {
                        [0, 1, 2, 3, 4].map((n) => {
                            return <th
                                key={n}
                            >
                                {n}
                            </th>
                        })
                    }
                </tr>
            </thead>

            <tbody>
                <tr>
                    {
                        [0, 1, 2, 3, 4].map((n) => {
                            return <td
                                key={n}
                                id={`color-${n}-inverse`}
                                className={`palette color-${n}-inverse`}
                            >
                                {getStyle(`color-${n}-inverse`)}
                            </td>
                        })
                    }
                </tr>
                <tr>
                    {
                        [0, 1, 2, 3, 4].map((n) => {
                            return <td
                                key={n}
                                id={`color-${n}`}
                                className={`palette color-${n}`}
                            >
                                {getStyle(`color-${n}`)}
                            </td>
                        })
                    }
                </tr>
                <tr>
                    {
                        [0, 1, 2, 3, 4].map((n) => {
                            return <td
                                key={n}
                                id={`color-${n}-compliment`}
                                className={`palette color-${n}-compliment`}
                            >
                                {getStyle(`color-${n}-compliment`)}
                            </td>
                        })
                    }
                </tr>
            </tbody>
        </table>
    </div>
}
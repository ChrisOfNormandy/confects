import type { HtmlElementProps } from '>types/html';
import type { ColorScheme } from '@dead-harbour/scss-rigging/types';
import { createContext, use, useEffect, useMemo, useState } from 'react';

interface IThemeContext {
    scheme: ColorScheme | null;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children }: Readonly<HtmlElementProps<'div'>>) {
    const [scheme, setScheme] = useState<ColorScheme | null>(() => {
        const state = globalThis.localStorage.getItem('scheme');
        if (state === 'dark' || state === 'light') return state;

        return null;
    });

    useEffect(() => {
        const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setScheme(e.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const context = useMemo(() => ({ scheme }), [scheme]);

    return <ThemeContext value={context}>{children}</ThemeContext>;
}

export function useThemes() {
    const themes = use(ThemeContext);

    if (!themes) throw new Error('useThemes must be used within a ThemeProvider');

    return themes;
}

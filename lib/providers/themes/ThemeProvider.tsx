import { HTMLElementProps } from '>types/html';
import { ColorScheme, ThemeManager } from '@dead-harbour/scss-rigging/themes';
import { createContext, use, useEffect, useMemo, useState } from 'react';

interface IThemeContext {
    theme: string
    scheme: ColorScheme | null
    manager: ThemeManager
}

const DEFAULT_SCHEME = globalThis.localStorage.getItem('scheme') as ColorScheme | null;
const DEFAULT_THEME = globalThis.localStorage.getItem('theme') ?? '';

const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children }: Readonly<HTMLElementProps>) {

    const [theme, setTheme] = useState(DEFAULT_THEME);
    const [scheme, setScheme] = useState(DEFAULT_SCHEME);

    const manager = useMemo(() => new ThemeManager(() => theme, setTheme, () => scheme, setScheme), [theme, scheme]);

    useEffect(() => {
        if (theme)
            globalThis.localStorage.setItem('theme', theme);
        else {
            const defaultTheme = manager.getDefaultTheme()?.name;
            if (defaultTheme)
                manager.setTheme(manager.getThemeList().find((t) => t.name === defaultTheme));
        }
    }, [theme, manager]);

    useEffect(() => {
        if (scheme !== 'dark' && scheme !== 'light')
            globalThis.localStorage.removeItem('scheme');
        else
            globalThis.localStorage.setItem('scheme', scheme);

        manager.updateThemeByScheme();
    }, [scheme, manager]);

    const context = useMemo(() => ({
        manager: manager.update(() => theme, () => scheme),
        scheme,
        theme
    }), [
        manager,
        scheme,
        theme
    ]);

    return <ThemeContext value={context}>
        {children}
    </ThemeContext>;
}

export function useThemes() {
    const themes = use(ThemeContext);

    if (!themes)
        throw new Error('useThemes must be used within a ThemeProvider');

    return themes;
}
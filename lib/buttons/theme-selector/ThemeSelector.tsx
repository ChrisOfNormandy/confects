import './styles/theme-selector.scss';
import { Button, ButtonProps } from '@buttons';
import { Icon } from '@decorations';
import { MenuBuilder, MenuSummonButton, useMenus } from '@menu';
import { themes } from '@chrisofnormandy/confetti/themes';
import { uniqueId } from '#helpers';
import { useEffect, useState } from 'react';

export interface ThemeSelectorProps {
    themeSelectButton?: ButtonProps
    schemeSelectButton?: ButtonProps
}

export function ThemeSelector(
    {
        themeSelectButton,
        schemeSelectButton
    }: ThemeSelectorProps
) {

    const menus = useMenus();

    const [id] = useState(uniqueId('theme_selector_'));
    const [theme, setTheme] = useState(themes.getTheme());
    const [colorScheme, setColorScheme] = useState(themes.getColorScheme());

    useEffect(() => {
        themes.addListener(id, (t, c) => {
            setTheme(t);
            setColorScheme(c);
        });

        return () => {
            themes.removeListener(id);
        };
    }, []);

    const options = themes.getThemeList();

    const menuBuilder = new MenuBuilder(menus, 'theme_selector');
    options.forEach((option) => {
        const opt = menuBuilder.addContent();
        opt.setText(option)
            .setOnClick(() => themes.setTheme(option));
    });

    return <div
        className='theme-selector-wrapper'
    >
        <MenuSummonButton
            place='bottom'
            {...themeSelectButton}
            builder={menuBuilder}
        >
            {theme}
        </MenuSummonButton>

        <Button
            {...schemeSelectButton}
            onClick={() => themes.setColorScheme(colorScheme === 'dark' && 'light' || 'dark')}
        >
            <Icon
                icon={colorScheme === 'dark' && 'moon' || 'sun'}
            />
        </Button>
    </div>;
}
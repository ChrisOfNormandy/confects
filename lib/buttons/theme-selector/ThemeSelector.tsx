import { Button } from "lib/buttons";
import { Icon } from "lib/decorations";
import { MenuBuilder, MenuSummonButton } from "lib/menu";
import { themes } from "@chrisofnormandy/confetti/themes";
import { uniqueId } from "lib/helpers";
import { useEffect, useState } from "react";
import { useMenus } from "@menu/MenuProvider";

export function ThemeSelector() {

    const menus = useMenus();

    const [id] = useState(uniqueId('theme_selector_'))
    const [theme, setTheme] = useState(themes.getTheme());
    const [colorScheme, setColorScheme] = useState(themes.getColorScheme());

    useEffect(() => {
        themes.addListener(id, (t, c) => {
            setTheme(t)
            setColorScheme(c);
        })

        return () => {
            themes.removeListener(id);
        }
    }, [])

    const options = themes.getThemeList();

    const menuBuilder = new MenuBuilder(menus, 'theme_selector');
    options.forEach((option) => {
        const opt = menuBuilder.addContent();
        opt.setText(option)
            .setOnClick(() => themes.setTheme(option))
    });;

    return <>
        <MenuSummonButton
            builder={menuBuilder}
        >
            {theme}
        </MenuSummonButton>

        <Button
            onClick={() => themes.setColorScheme(colorScheme === 'dark' && 'light' || 'dark')}
        >
            <Icon
                icon={colorScheme === 'dark' && 'moon' || 'sun'}
            />
        </Button>
    </>
}
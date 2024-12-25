import { Button } from "$/buttons";
import { Icon } from "$/decorations";
import { Menu, MenuBuilder, menus } from "$/managed";
import { themes } from "@chrisofnormandy/confetti/themes";
import { uniqueId } from "$/helpers";
import { useEffect, useState } from "react";

export function ThemeSelector() {

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

    return <>
        <Button
            onClick={
                (e) => {
                    const options = themes.getThemeList();

                    const menuBuilder = new MenuBuilder('theme_selector');
                    menuBuilder.attach(e.currentTarget);
                    options.forEach((option) => {
                        const opt = menuBuilder.addContent();
                        opt.setText(option)
                            .setOnClick(() => themes.setTheme(option))
                    });

                    const props = menuBuilder.getProps();
                    const menu = <Menu {...props} />;

                    menus.store(props.id, menu).open(props.id);
                }
            }
        >
            {theme}
        </Button>

        <Button
            onClick={() => themes.setColorScheme(colorScheme === 'dark' && 'light' || 'dark')}
        >
            <Icon
                icon={colorScheme === 'dark' && 'moon' || 'sun'}
            />
        </Button>
    </>
}
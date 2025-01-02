import { HTML_DivProps } from '#types';
import { IMenuProps, Menu, MenuBuilder, useMenus } from '@menu';
import { memo, useEffect, useRef, useState } from 'react';

export type ExpandingMenuProps = {
    builder: MenuBuilder
} & HTML_DivProps

export default function ExpandingMenu(
    {
        builder,
        ...props
    }: ExpandingMenuProps
) {

    const [inMenu, isInMenu] = useState(false);
    const [inTrigger, isInTrigger] = useState(false);

    const menus = useMenus();
    const ref = useRef<HTMLDivElement>(null);

    const closeMenu = () => {
        const menu = menus.get(builder.id);
        if (menu)
            menu.close();
    };

    const openMenu = () => {
        if (!ref.current)
            return;

        const menu = menus.get(builder.id);
        if (menu)
            console.debug('Already open');
        else {
            builder.attach(ref.current);

            menus
                .add(builder.id, memo((p: IMenuProps) => <Menu
                    {...builder.getProps()}
                    place='bottom'
                    {...p}
                    wrapper={
                        {
                            onMouseLeave: () => isInMenu(false),
                            onMouseEnter: () => isInMenu(true)
                        }
                    }
                />))
                .open();
        }
    };

    useEffect(() => {
        if (inTrigger) {
            console.log('IN');

            const menu = menus.get(builder.id);

            if (!inMenu && !menu)
                openMenu();
        }
        else {
            console.log('OUT');

            if (!inMenu)
                closeMenu();
        }
    }, [inTrigger, inMenu]);

    return <div
        {...props}
        onMouseEnter={() => isInTrigger(true)}
        onMouseLeave={() => isInTrigger(false)}
        ref={ref}
    >
        EXPANDING MENU
    </div>;
}
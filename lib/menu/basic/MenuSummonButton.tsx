import { Button, ButtonProps } from '@buttons';
import { memo } from 'react';
import { Menu, MenuBuilder, useMenus } from '@menu';

interface extMenuSummonButtonProps {
    builder: MenuBuilder
    place?: 'top' | 'bottom' | 'left' | 'right'
}

export type MenuSummonButtonProps = ButtonProps & extMenuSummonButtonProps

export function MenuSummonButton(
    {
        builder,
        place,
        ...props
    }: MenuSummonButtonProps
) {
    const menus = useMenus();

    return <Button
        {...props}
        onClick={(e) => {
            builder.attach(e.currentTarget);

            const menuProps = builder.getProps();

            const menu = memo((p) => <Menu
                place={place}
                {...menuProps}
                {...p}
            />);

            menus.add(menuProps.id, menu).open();
        }}
    />;
}
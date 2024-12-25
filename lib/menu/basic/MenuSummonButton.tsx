import { Button, ButtonProps } from "$/buttons";
import { Menu, MenuBuilder } from "./Menu";
import { menus } from "./MenuManager";

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
    return <Button
        onClick={(e) => {
            builder.attach(e.currentTarget);

            const menuProps = builder.getProps();

            const menu = <Menu
                place={place}
                {...menuProps}
            />

            menus.store(menuProps.id, menu).open(menuProps.id);
        }}
        {...props}
    />
}
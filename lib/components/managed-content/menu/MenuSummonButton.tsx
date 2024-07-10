import { Button, ButtonProps, menus } from "@lib/main";
import MenuBuilder from "./MenuBuilder";
import { useRef } from "react";
import Menu from "./Menu";

interface extMenuSummonButtonProps {
    id: string
    builder: MenuBuilder
    place?: 'top' | 'bottom' | 'left' | 'right'
}

export type MenuSummonButtonProps = ButtonProps & extMenuSummonButtonProps

export default function MenuSummonButton(
    {
        id,
        builder,
        place,
        ...props
    }: MenuSummonButtonProps
) {
    const ref = useRef(null as HTMLButtonElement | null);

    return <Button
        onClick={(e) => {
            if (!ref.current)
                return;

            const menu = <Menu
                id={id}
                menuContent={builder.getContent()}
                place={place}
                position={place && ref.current.getBoundingClientRect() || new DOMRect(e.clientX, e.clientY)}
            />

            menus.store(id, menu).open();
        }}
        {...props}
        innerRef={ref}
    />
}
import './styles/menu.scss';
import { getClassName, HTML_DivProps, MenuContent } from "@";
import { MenuItem } from "./fragments/MenuItem";
import { ReactNode, useEffect, useRef } from "react";

interface extMenuProps {
    heading?: ReactNode
    menuContent: MenuContent[]
    place?: 'left' | 'top' | 'right' | 'bottom'
    position: DOMRect
}

export type MenuProps = HTML_DivProps & extMenuProps;

export function Menu(
    {
        className,
        heading,
        menuContent,
        place,
        position,
        ...props
    }: MenuProps
) {

    const menuRef = useRef(null as HTMLDivElement | null);

    useEffect(() => {
        if (!menuRef.current)
            return;

        const pos = {
            x: position.left,
            y: position.top
        };

        if (place) {
            const bounds = menuRef.current.getBoundingClientRect();

            switch (place) {
                case 'bottom': {
                    pos.y = position.bottom;
                    break;
                }
                case 'top': {
                    pos.y = position.top - bounds.height;
                    break;
                }
                case 'left': {
                    pos.x = position.left - bounds.width;
                    break;
                }
                case 'right': {
                    pos.x = position.right;
                    break;
                }
            }
        }

        menuRef.current.style.left = `${pos.x}px`;
        menuRef.current.style.top = `${pos.y}px`;
    }, [position, menuRef.current]);

    return <div
        className={getClassName('menu', className)}
        {...props}
        ref={menuRef}
    >
        {
            heading &&
            <div
                className='menu-header'
            >
                {heading}
            </div>
        }

        {
            menuContent.map((content, c) => {
                return <MenuItem
                    key={c}
                    menuContent={content}
                />
            })
        }
    </div>
}
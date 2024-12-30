import './styles/menu.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { IManagedContentProps } from '@managed/ManagedContent';
import { MenuContent, MenuItem } from 'lib/menu';
import { ReactNode, useEffect, useRef } from "react";
import { Heading } from '@decorations/heading/Heading';

export type IMenuProps = {
    heading?: ReactNode
    place?: 'left' | 'top' | 'right' | 'bottom'
    position?: DOMRect
} & IManagedContentProps
    & HTML_DivProps

export type MenuProps = {
    menuContent: MenuContent[]
} & IMenuProps

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

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!menuRef.current)
            return;

        const pos = {
            x: position?.left || 0,
            y: position?.top || 0
        };

        if (place) {
            const bounds = menuRef.current.getBoundingClientRect();

            switch (place) {
                case 'bottom': {
                    pos.y = position?.bottom || 0;
                    break;
                }
                case 'top': {
                    pos.y = (position?.top || 0) - bounds.height;
                    break;
                }
                case 'left': {
                    pos.x = (position?.left || 0) - bounds.width;
                    break;
                }
                case 'right': {
                    pos.x = position?.right || 0;
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
        <Heading>
            {heading}
        </Heading>

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
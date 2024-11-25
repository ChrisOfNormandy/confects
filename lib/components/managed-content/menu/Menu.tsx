import './styles/menu.scss';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';
import { MenuContent } from './MenuContent';
import { MenuItem } from './fragments/MenuItem';
import { ReactNode, useEffect, useRef } from "react";

export type MenuProps = {
    heading?: ReactNode
    id: string
    menuContent: MenuContent[]
    place?: 'left' | 'top' | 'right' | 'bottom'
    position: DOMRect
} & HTML_DivProps

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

export class MenuBuilder {
    private readonly id: string;
    private readonly content: MenuContent[] = [];
    private position: DOMRect;

    addContent() {
        const content = new MenuContent(this.id);
        this.content.push(content);

        return content;
    }

    attach<T extends HTMLElement>(ref: T) {
        this.position = ref.getBoundingClientRect();
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

    getProps(): MenuProps {
        return {
            id: this.id,
            menuContent: this.content,
            position: this.position
        }
    }

    constructor(id: string) {
        this.id = id;

        this.position = new DOMRect(0, 0);
    }
}
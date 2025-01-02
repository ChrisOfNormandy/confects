import './styles/menu.scss';
import { getClassName } from 'lib/helpers';
import { Heading } from '@decorations';
import { HTML_DivProps } from 'lib/types';
import { IManagedContentProps } from '@managed';
import { MenuContent, MenuItem } from 'lib/menu';
import { ReactNode, useEffect, useRef } from 'react';
import { themes } from '@chrisofnormandy/confetti/themes';

export type IMenuProps = {
    heading?: ReactNode
    place?: 'left' | 'top' | 'right' | 'bottom'
    position?: DOMRect
    wrapper?: HTML_DivProps
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
        wrapper,
        ...props
    }: MenuProps
) {

    const wrapperRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!menuRef.current || !wrapperRef.current)
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
                default: throw new Error('Unknown place: ' + place);
            }
        }

        wrapperRef.current.style.left = `${pos.x - 10}px`;
        wrapperRef.current.style.top = `${pos.y - 10}px`;
    }, [position, menuRef, wrapperRef]);

    return <div
        {...wrapper}
        className={getClassName('menu-wrapper', wrapper?.className)}
        ref={wrapperRef}
    >
        <div
            className={getClassName('menu', className, themes.getBasicStyling('body'))}
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
                    />;
                })
            }
        </div>
    </div>;
}
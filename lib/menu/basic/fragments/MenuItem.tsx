import './styles/menu-item.scss';
import { Button } from '$/buttons';
import { getClassName } from '$/helpers';
import { HTML_DivProps } from '#types/html';
import { Icon } from '$/decorations';
import { MenuContent } from '../MenuContent';

interface extMenuItemProps {
    menuContent: MenuContent
}

type MenuItemProps = HTML_DivProps & extMenuItemProps;

export function MenuItem(
    {
        menuContent,
        className,
        ...props
    }: MenuItemProps
) {
    const text = menuContent.getText();
    const icon = menuContent.getIcon();
    const hoverIcon = menuContent.getHoverIcon();

    const menuProps = menuContent.getProps();

    return <div
        key={menuProps.id}
        className={getClassName('menu-item', className)}
        {...props}
    >
        <Button
            {...menuProps}
            className={getClassName('menu-item-btn hvr dis', menuProps.className)}
        >
            {
                icon &&
                <Icon
                    className={getClassName('menu-icon', hoverIcon && 'std-icon')}
                    icon={icon}
                />
            }

            {
                hoverIcon &&
                <Icon
                    className={getClassName('menu-icon', hoverIcon && 'hvr-icon')}
                    icon={hoverIcon}
                />
            }

            {
                text &&
                <span
                    className='menu-text'
                >
                    {text}
                </span>
            }
        </Button>
    </div>
}
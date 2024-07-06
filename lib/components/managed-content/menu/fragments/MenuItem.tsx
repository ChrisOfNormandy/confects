import { Button, getClassName, HTMLDivProps, Icon } from "@lib/main"
import MenuContent from "../MenuContent";
import './styles/menu-item.scss';

interface extMenuItemProps {
    menuContent: MenuContent
}

export type MenuItemProps = HTMLDivProps & extMenuItemProps;

export default function MenuItem(
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
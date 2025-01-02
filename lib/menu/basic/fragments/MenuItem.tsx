import './styles/menu-item.scss';
import { Button } from 'lib/buttons';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { Icon } from 'lib/decorations';
import { MenuContent } from 'lib/menu';

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
        className={getClassName('menu-item', className)}
        {...props}
    >
        <Button
            {...menuProps}
            className={getClassName('menu-item-btn hvr dis', menuProps.className)}
            theme={{ background: { style: 'body' } }}
        >
            {
                icon || hoverIcon &&
                <span>
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
                </span>
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
    </div>;
}
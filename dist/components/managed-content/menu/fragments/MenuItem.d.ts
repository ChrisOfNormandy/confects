import './styles/menu-item.scss';
import { HTML_DivProps, MenuContent } from '../../../../main';
interface extMenuItemProps {
    menuContent: MenuContent;
}
type MenuItemProps = HTML_DivProps & extMenuItemProps;
export declare function MenuItem({ menuContent, className, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};

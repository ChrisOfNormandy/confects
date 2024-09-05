import './styles/menu-item.scss';
import { HTML_DivProps } from '../../../../types/html';
import { MenuContent } from '../MenuContent';
interface extMenuItemProps {
    menuContent: MenuContent;
}
type MenuItemProps = HTML_DivProps & extMenuItemProps;
export declare function MenuItem({ menuContent, className, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};

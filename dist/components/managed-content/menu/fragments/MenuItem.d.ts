import { HTMLDivProps } from "@lib/main";
import MenuContent from "../MenuContent";
import './styles/menu-item.scss';
interface extMenuItemProps {
    menuContent: MenuContent;
}
export type MenuItemProps = HTMLDivProps & extMenuItemProps;
export default function MenuItem({ menuContent, className, ...props }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};

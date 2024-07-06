import { ReactNode } from "react";
import { HTMLDivProps } from "../../../main";
import MenuContent from "./MenuContent";
import './styles/menu.scss';
interface extMenuProps {
    heading?: ReactNode;
    menuContent: MenuContent[];
    place?: 'left' | 'top' | 'right' | 'bottom';
    position: DOMRect;
}
export type MenuProps = HTMLDivProps & extMenuProps;
export default function Menu({ className, heading, menuContent, place, position, ...props }: MenuProps): import("react/jsx-runtime").JSX.Element;
export {};

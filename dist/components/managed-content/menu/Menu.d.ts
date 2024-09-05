import './styles/menu.scss';
import { HTML_DivProps } from '../../../types/html';
import { MenuContent } from './MenuContent';
import { ReactNode } from "react";
interface extMenuProps {
    heading?: ReactNode;
    menuContent: MenuContent[];
    place?: 'left' | 'top' | 'right' | 'bottom';
    position: DOMRect;
}
export type MenuProps = HTML_DivProps & extMenuProps;
export declare function Menu({ className, heading, menuContent, place, position, ...props }: MenuProps): import("react/jsx-runtime").JSX.Element;
export {};

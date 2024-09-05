import { ButtonProps } from "../../../buttons";
import { MouseEventHandler, ReactNode } from "react";
export declare class MenuContent {
    private id;
    private menuId;
    private text?;
    private textGetter?;
    private icon?;
    private iconGetter?;
    private hoverIcon?;
    private hoverIconGetter?;
    private disabled?;
    private disabledGetter?;
    private closeOnClick;
    private closeOnContextMenu;
    private props;
    private onClick?;
    private onContextMenu?;
    readonly spacer: boolean;
    getText(): ReactNode;
    setText(text: ReactNode, getter?: () => ReactNode): this;
    getIcon(): string | undefined;
    setIcon(icon: string, getter?: () => string): this;
    getHoverIcon(): string | undefined;
    setHoverIcon(icon: string, getter?: () => string): this;
    setOnClick(fn: MouseEventHandler, closeOnClick?: boolean): void;
    setOnContextMenu(fn: MouseEventHandler, closeOnContextMenu?: boolean): void;
    addProps(props: ButtonProps): this;
    getProps(): ButtonProps;
    /**
     *
     * @param spacer Render as a divider line or whitespace instead of an option button.
     */
    constructor(menuId: string, spacer?: boolean);
}

import { ButtonProps, menus } from '@';
import { MouseEventHandler, ReactNode } from "react";
import { v4 } from 'uuid';

export class MenuContent {
    private id: string;
    private menuId: string;

    private text?: ReactNode;
    private textGetter?: () => ReactNode;
    private icon?: string;
    private iconGetter?: () => string;
    private hoverIcon?: string;
    private hoverIconGetter?: () => string;
    private disabled?: boolean;
    private disabledGetter?: () => boolean;

    private closeOnClick: boolean = true;
    private closeOnContextMenu: boolean = true;
    private props: ButtonProps = {};

    private onClick?: MouseEventHandler;
    private onContextMenu?: MouseEventHandler;

    readonly spacer: boolean;

    getText() {
        if (this.spacer)
            return null;

        return this.textGetter && this.textGetter() || this.text;
    }

    setText(text: ReactNode, getter?: () => ReactNode) {
        if (this.spacer)
            return this;

        if (getter)
            this.textGetter = getter;
        this.text = text;

        return this;
    }

    getIcon() {
        if (this.spacer)
            return '';

        return this.iconGetter && this.iconGetter() || this.icon;
    }

    setIcon(icon: string, getter?: () => string) {
        if (this.spacer)
            return this;

        if (getter)
            this.iconGetter = getter;
        this.icon = icon;

        return this;
    }

    getHoverIcon() {
        if (this.spacer)
            return '';

        return this.hoverIconGetter && this.hoverIconGetter() || this.hoverIcon;
    }

    setHoverIcon(icon: string, getter?: () => string) {
        if (this.spacer)
            return this;

        if (getter)
            this.hoverIconGetter = getter;
        this.hoverIcon = icon;

        return this;
    }

    setOnClick(fn: MouseEventHandler, closeOnClick = true) {
        this.onClick = fn;
        this.closeOnClick = closeOnClick;
    }

    setOnContextMenu(fn: MouseEventHandler, closeOnContextMenu = true) {
        this.onContextMenu = fn;
        this.closeOnContextMenu = closeOnContextMenu;
    }

    addProps(props: ButtonProps) {
        this.props = { ...this.props, ...props };

        return this;
    }

    getProps(): ButtonProps {
        if (this.spacer) {
            return {
                id: this.id
            }
        }

        return {
            id: this.id,
            onClick: (e) => {
                if (!this.onClick)
                    return;

                this.onClick(e);

                if (this.closeOnClick)
                    menus.close(this.menuId)
            },
            onContextMenu: (e) => {
                if (!this.onContextMenu)
                    return

                this.onContextMenu(e);

                if (this.closeOnContextMenu)
                    menus.close(this.menuId)
            },
            disabled: this.disabledGetter && this.disabledGetter() || this.disabled,
            ...this.props
        }
    }

    /**
     * 
     * @param spacer Render as a divider line or whitespace instead of an option button.
     */
    constructor(menuId: string, spacer = false) {
        this.id = v4();
        this.menuId = menuId;
        this.spacer = spacer;
    }
}
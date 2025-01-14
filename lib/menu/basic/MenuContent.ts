import { ButtonProps } from 'lib/buttons';
import { MenuBuilder } from './MenuBuilder';
import { MouseEventHandler, ReactNode } from 'react';
import { v4 } from 'uuid';

export class MenuContent {
    private readonly id: string;

    private readonly builder: MenuBuilder;

    private text?: ReactNode;

    private textGetter?: () => ReactNode;

    private icon?: string;

    private iconGetter?: () => string;

    private hoverIcon?: string;

    private hoverIconGetter?: () => string;

    private disabled?: boolean;

    private disabledGetter?: () => boolean;

    private closeOnClick = true;

    private closeOnContextMenu = true;

    private props: ButtonProps = {};

    private onClick?: MouseEventHandler;

    private onContextMenu?: MouseEventHandler;

    getText() {
        return this.textGetter && this.textGetter() || this.text;
    }

    setText(text: ReactNode | (() => ReactNode)) {
        if (typeof text === 'function')
            this.textGetter = text;
        else
            this.text = text;

        return this;
    }

    getIcon() {
        return this.iconGetter && this.iconGetter() || this.icon;
    }

    setIcon(icon: string | (() => string)) {
        if (typeof icon === 'function')
            this.iconGetter = icon;
        else
            this.icon = icon;

        return this;
    }

    getHoverIcon() {
        return this.hoverIconGetter && this.hoverIconGetter() || this.hoverIcon;
    }

    setHoverIcon(icon: string | (() => string)) {
        if (typeof icon === 'function')
            this.hoverIconGetter = icon;
        else
            this.hoverIcon = icon;

        return this;
    }

    setOnClick(fn: MouseEventHandler, closeOnClick = true) {
        this.onClick = fn;
        this.closeOnClick = closeOnClick;

        return this;
    }

    setOnContextMenu(fn: MouseEventHandler, closeOnContextMenu = true) {
        this.onContextMenu = fn;
        this.closeOnContextMenu = closeOnContextMenu;

        return this;
    }

    addProps(props: ButtonProps) {
        this.props = { ...this.props,
...props };

        return this;
    }

    getProps(): ButtonProps {
        return {
            id: this.id,
            onClick: (e) => {
                if (!this.onClick)
                    return;

                this.onClick(e);

                if (this.closeOnClick)
                    this.builder.manager.close(this.builder.id);
            },
            onContextMenu: (e) => {
                if (!this.onContextMenu)
                    return;

                this.onContextMenu(e);

                if (this.closeOnContextMenu)
                    this.builder.manager.close(this.builder.id);
            },
            disabled: this.disabledGetter && this.disabledGetter() || this.disabled,
            ...this.props
        };
    }

    constructor(builder: MenuBuilder) {
        this.id = v4();
        this.builder = builder;
    }
}
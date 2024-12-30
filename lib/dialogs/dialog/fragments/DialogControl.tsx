import { Button, ButtonProps } from "lib/buttons";
import { Icon } from "lib/decorations";
import { ReactNode } from "react";

export type DialogControlProps = {
    text?: ReactNode
    icon?: string
} & ButtonProps;

export function DialogControl(
    {
        text,
        icon,
        ...props
    }: DialogControlProps
) {
    return <Button
        {...props}
    >
        <Icon
            icon={icon || 'question'}
        />

        {
            text &&
            <span>
                {text}
            </span>
        }
    </Button>
}
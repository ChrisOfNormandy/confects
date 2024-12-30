import './styles/confirmation.scss';
import { Button } from "lib/buttons"
import { getClassName } from "lib/helpers"
import { HTML_DivProps } from "lib/types"
import { IManagedContentProps } from "@managed/ManagedContent"
import { ReactNode } from "react"
import { ThemeProps, themes } from "@chrisofnormandy/confetti/themes"
import { useDialogs } from "@dialogs/DialogProvider"

interface ConfirmationThemeScheme {
    cancelButton?: ThemeProps
    container?: ThemeProps
    okButton?: ThemeProps
}

export type ConfirmationProps = {
    message: ReactNode
    onCancel: () => void
    onConfirm: () => void
    scheme?: ConfirmationThemeScheme
} & HTML_DivProps
    & IManagedContentProps

export default function Confirmation(
    {
        children,
        className,
        message,
        onCancel,
        onConfirm,
        scheme,
        ...props
    }: ConfirmationProps
) {
    const dialogs = useDialogs();

    return <div
        className={getClassName('dialog confirmation', className, themes.getStyles(scheme?.container?.theme))}
        {...props}
    >
        <div
            className='confirmation-body'
        >
            <span
                className='message'
            >
                {message}
            </span>

            {children}
        </div>

        <div
            className='confirmation-footer'
        >
            <Button
                onClick={() => {
                    onCancel();
                    dialogs.close(props.id);
                }}
                theme={scheme?.cancelButton?.theme}
            >
                Cancel
            </Button>

            <Button
                onClick={() => {
                    onConfirm();
                    dialogs.close(props.id);
                }}
                theme={scheme?.okButton?.theme}
            >
                OK
            </Button>
        </div>
    </div>
}
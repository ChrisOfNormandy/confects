import './styles/alert.scss';
import { Button } from "lib/buttons"
import { getClassName } from "#helpers/components"
import { HTML_DivProps } from "#types/html"
import { IManagedContentProps } from '@managed/ManagedContent';
import { ThemeProps, themes } from '@chrisofnormandy/confetti/themes';
import { useDialogs } from '@dialogs/DialogProvider';
import { ReactNode } from 'react';

interface AlertThemeScheme {
    button?: ThemeProps
    container?: ThemeProps
}

export type AlertProps = {
    message: ReactNode
    scheme?: AlertThemeScheme
} & HTML_DivProps
    & IManagedContentProps

export default function Alert(
    {
        children,
        className,
        message,
        scheme,
        ...props
    }: AlertProps
) {
    const dialogs = useDialogs();

    return <div
        className={getClassName('dialog alert', className, themes.getStyles(scheme?.container?.theme))}
        {...props}
    >
        <div
            className='alert-body'
        >
            <span
                className='message'
            >
                {message}
            </span>

            {children}
        </div>

        <div
            className='alert-footer'
        >
            <Button
                onClick={() => dialogs.close(props.id)}
                theme={scheme?.button?.theme}
            >
                OK
            </Button>
        </div>
    </div>
}
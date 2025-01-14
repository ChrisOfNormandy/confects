import './styles/alert.scss';
import { Button } from '@buttons';
import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';
import { IManagedContentProps } from '@managed';
import { ThemeProp, themes } from '@chrisofnormandy/confetti/themes';
import { useDialogs } from '@dialogs';
import { ReactNode } from 'react';

interface AlertThemeScheme {
    button?: ThemeProp
    container?: ThemeProp
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
        className={getClassName('dialog alert', className, themes.getStyles(scheme?.container))}
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
                theme={scheme?.button}
            >
                OK
            </Button>
        </div>
    </div>;
}
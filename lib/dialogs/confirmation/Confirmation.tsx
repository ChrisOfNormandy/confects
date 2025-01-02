import './styles/confirmation.scss';
import { Button } from '@buttons';
import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';
import { IManagedContentProps } from '@managed';
import { ReactNode } from 'react';
import { ThemeProp, themes } from '@chrisofnormandy/confetti/themes';
import { useDialogs } from '@dialogs';

interface ConfirmationThemeScheme {
    cancelButton?: ThemeProp
    container?: ThemeProp
    okButton?: ThemeProp
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
        className={getClassName('dialog confirmation', className, themes.getStyles(scheme?.container))}
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
                theme={scheme?.cancelButton}
            >
                Cancel
            </Button>

            <Button
                onClick={() => {
                    onConfirm();
                    dialogs.close(props.id);
                }}
                theme={scheme?.okButton}
            >
                OK
            </Button>
        </div>
    </div>;
}
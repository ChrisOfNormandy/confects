import './styles/dialog.scss';
import { Glyph } from '@buttons';
import { DialogBody, DialogControl, DialogControlProps, DialogFooter, DialogHeader, useDialogs } from '@dialogs';
import { getClassName, makeDraggable } from '#helpers';
import { HTML_DivProps } from '#types';
import { MouseEvent, ReactNode } from 'react';
import { Heading } from '@decorations';
import { IManagedContentProps } from '@managed';

export type IDialogProps = {
    cancelButton?: DialogControlProps
    closeButton?: DialogControlProps
    heading?: ReactNode
    mobile?: boolean | 'header'
    okButton?: DialogControlProps
} & HTML_DivProps;

export type DialogProps = IDialogProps & IManagedContentProps;

export function Dialog(
    {
        cancelButton,
        children,
        className,
        closeButton,
        heading,
        mobile,
        okButton,
        ...props
    }: DialogProps
) {
    const dialogs = useDialogs();
    const draggableProps = mobile && makeDraggable(props.id);

    return <div
        className={getClassName('dialog f-body', className)}
        {...props}
        {...(mobile !== 'header' && mobile && draggableProps || {})}
    >
        <DialogHeader
            className={getClassName(!heading && 'no-heading')}
            {...(mobile === 'header' && draggableProps || {})}
        >
            <Heading>
                {heading}
            </Heading>

            <span>
                <Glyph
                    icon={closeButton?.icon || 'x-lg'}
                    onClick={(e) => {
                        dialogs.close(props.id);
                        if (closeButton?.onClick)
                            closeButton.onClick(e as MouseEvent<HTMLButtonElement>);
                    }}
                />
            </span>
        </DialogHeader>

        <DialogBody>
            {children}
        </DialogBody>

        <DialogFooter>
            <DialogControl
                text='Cancel'
                {...cancelButton}
            />

            <DialogControl
                text='OK'
                {...okButton}
            />
        </DialogFooter>
    </div>;
}
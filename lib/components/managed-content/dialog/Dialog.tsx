import { ReactNode } from "react";
import { Button, Glyph, HTMLDivProps, dialogs, getClassName, makeDraggable } from "../../../main";
import DialogHeader from "./fragments/DialogHeader";
import DialogBody from "./fragments/DialogBody";
import DialogFooter from "./fragments/DialogFooter";
import './styles/dialog.scss';

interface extDialogProps {
    cancelText?: ReactNode
    closeIcon?: string
    heading?: ReactNode
    id: string
    mobile?: boolean | 'header'
    okText?: ReactNode
    onCancel?: () => void
    onClose?: () => void
    onOk?: () => void
    stayOpenOnCancel?: boolean
    stayOpenOnOk?: boolean
}

export type DialogProps = HTMLDivProps & extDialogProps;

export default function Dialog(
    {
        cancelText = 'cancel',
        children,
        className,
        closeIcon = 'x-lg',
        heading,
        id,
        mobile,
        okText = 'ok',
        onCancel,
        onClose,
        onOk,
        stayOpenOnCancel = false,
        stayOpenOnOk = false,
        ...props
    }: DialogProps
) {

    return <div
        id={id}
        className={getClassName('dialog f-body', className)}
        {...props}
        {...((mobile !== 'header' && mobile) && makeDraggable(id) || {})}
    >
        <DialogHeader
            className={getClassName(!heading && 'no-heading')}
            {...(mobile === 'header' && makeDraggable(id) || {})}
        >
            {
                heading &&
                <span>
                    {heading}
                </span>
            }

            <span>
                <Glyph
                    icon={closeIcon}
                    className='f-exit b-compliment'
                    onClick={() => {
                        dialogs.close(id);

                        if (onClose)
                            onClose();
                    }}
                />
            </span>
        </DialogHeader>

        <DialogBody>
            {children}
        </DialogBody>

        <DialogFooter>
            <Button
                onClick={() => {
                    if (onCancel)
                        onCancel();

                    if (!stayOpenOnCancel)
                        dialogs.close(id);
                }}
                className='f-trinary hvr dis'
            >
                {cancelText}
            </Button>

            <Button
                onClick={() => {
                    if (onOk)
                        onOk();

                    if (!stayOpenOnOk)
                        dialogs.close(id);
                }}
                className='f-primary hvr dis'
            >
                {okText}
            </Button>
        </DialogFooter>
    </div>
}
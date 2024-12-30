import { DialogControl, DialogControlProps } from "@dialogs/dialog/fragments/DialogControl";
import { getClassName, makeDraggable } from "#helpers/components";
import { Glyph } from "lib/buttons";
import { Heading } from "@decorations/heading/Heading";
import { HTML_FormProps } from "#types/html";
import { IManagedContentProps } from "@managed/ManagedContent";
import { ModalBody } from "./fragments/ModalBody";
import { ModalFooter } from "./fragments/ModalFooter";
import { ModalHeader } from "./fragments/ModalHeader";
import { MouseEvent, ReactNode } from "react";
import { useDialogs } from "@dialogs/DialogProvider";

export type ModalProps = {
    cancelButton?: DialogControlProps
    closeButton?: DialogControlProps
    heading: ReactNode
    mobile?: boolean | 'header'
    okButton?: DialogControlProps
} & HTML_FormProps
    & IManagedContentProps;

export default function Modal(
    {
        cancelButton,
        children,
        className,
        closeButton,
        heading,
        mobile,
        okButton,
        ...props
    }: ModalProps
) {

    const dialogs = useDialogs();
    const draggableProps = mobile && makeDraggable(props.id)

    return <form
        className={getClassName('modal', className)}
        {...props}
        {...((mobile !== 'header' && mobile) && draggableProps || {})}
    >
        <ModalHeader>
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
        </ModalHeader>

        <ModalBody>
            {children}
        </ModalBody>

        <ModalFooter>
            <DialogControl
                text='Cancel'
                {...cancelButton}
            />

            <DialogControl
                text='OK'
                {...okButton}
            />
        </ModalFooter>
    </form>
}
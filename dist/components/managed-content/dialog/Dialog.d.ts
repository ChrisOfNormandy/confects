import { ReactNode } from "react";
import { HTMLDivProps } from "../../../main";
import './styles/dialog.scss';
interface extDialogProps {
    cancelText?: ReactNode;
    closeIcon?: string;
    heading?: ReactNode;
    id: string;
    mobile?: boolean | 'header';
    okText?: ReactNode;
    onCancel?: () => void;
    onClose?: () => void;
    onOk?: () => void;
    stayOpenOnCancel?: boolean;
    stayOpenOnOk?: boolean;
}
export type DialogProps = HTMLDivProps & extDialogProps;
export default function Dialog({ cancelText, children, className, closeIcon, heading, id, mobile, okText, onCancel, onClose, onOk, stayOpenOnCancel, stayOpenOnOk, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export {};

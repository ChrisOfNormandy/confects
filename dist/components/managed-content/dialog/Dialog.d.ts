import './styles/dialog.scss';
import { HTML_DivProps } from '../../../types/html';
import { ReactNode } from "react";
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
export type DialogProps = HTML_DivProps & extDialogProps;
export declare function Dialog({ cancelText, children, className, closeIcon, heading, id, mobile, okText, onCancel, onClose, onOk, stayOpenOnCancel, stayOpenOnOk, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export {};

import './styles/file-input.scss';
import { InputProps } from "../../../main";
import { ReactNode } from "react";
interface extFileInputProps {
    dropZoneText?: ReactNode;
    multiple?: boolean | number;
    multipleMin?: number;
    onFileChange?: (files: File[]) => void;
}
export type FileInputProps = InputProps & extFileInputProps;
export declare function FileInput({ className, dropZoneText, multiple, multipleMin, required, onFileChange, ...props }: FileInputProps): import("react/jsx-runtime").JSX.Element;
export {};

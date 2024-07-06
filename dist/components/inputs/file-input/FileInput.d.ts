import { ReactNode } from "react";
import { InputProps } from "../../../main";
import './styles/file-input.scss';
interface extFileInputProps {
    dropZoneText?: ReactNode;
    multiple?: boolean | number;
    multipleMin?: number;
    onFileChange?: (files: File[]) => void;
}
export type FileInputProps = InputProps & extFileInputProps;
export default function FileInput({ className, dropZoneText, multiple, multipleMin, required, onFileChange, ...props }: FileInputProps): import("react/jsx-runtime").JSX.Element;
export {};

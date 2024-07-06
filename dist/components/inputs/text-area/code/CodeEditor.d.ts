import './styles/code-editor.scss';
import './userWorkers';
import { HTMLDivProps } from '@lib/main';
import { ReactNode } from 'react';
interface extCodeExitorProps {
    id: string;
    heading?: ReactNode;
    canDownload?: boolean;
}
export type CodeEditorProps = HTMLDivProps & extCodeExitorProps;
export default function CodeEditor({ id, className, heading, defaultValue, canDownload, ...props }: CodeEditorProps): import("react/jsx-runtime").JSX.Element;
export {};

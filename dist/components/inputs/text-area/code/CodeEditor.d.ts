import './styles/code-editor.scss';
import './userWorkers';
import { HTML_DivProps } from '../../../../types/html';
import { ReactNode } from 'react';
interface extCodeExitorProps {
    id: string;
    heading?: ReactNode;
}
export type CodeEditorProps = HTML_DivProps & extCodeExitorProps;
export declare function CodeEditor({ id, className, heading, defaultValue, ...props }: CodeEditorProps): import("react/jsx-runtime").JSX.Element;
export {};

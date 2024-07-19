import './styles/code-editor.scss';
import './userWorkers';
import { Button, getClassName, HTML_DivProps } from '@';
import { ReactNode, useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor'

interface extCodeExitorProps {
    id: string
    heading?: ReactNode
}

const BORDER_SIZE = 2;

export type CodeEditorProps = HTML_DivProps & extCodeExitorProps;

export function CodeEditor(
    {
        id,
        className,
        heading,
        defaultValue,
        ...props
    }: CodeEditorProps
) {

    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoRef = useRef(null as HTMLDivElement | null);

    useEffect(() => {
        if (monacoRef) {
            setEditor((editor) => {
                if (editor)
                    return editor;

                return monaco.editor.create(monacoRef.current!, {
                    value: defaultValue?.toString()
                });
            });
        }

        return () => editor?.dispose();
    }, [monacoRef.current]);

    useEffect(() => {
        const resize = () => {
            if (!editor || !monacoRef.current)
                return;

            const rect = monacoRef.current.getBoundingClientRect();

            editor.layout({ width: rect.width - BORDER_SIZE * 2, height: 200 });
        }

        window.requestAnimationFrame(() => resize());

        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [editor])

    return <div
        id={id}
        className={getClassName('input code-editor', className)}
    >
        <div
            className='header'
        >
            {
                heading &&
                <div
                    className='heading'
                >
                    {heading}
                </div>
            }

            <Button
                className='f-trinary'
                onClick={() => {
                    const content = editor?.getModel()?.getValue();
                    if (!content)
                        return;

                    const file = new File([content], (heading || 'download.md').toString())
                    const url = window.URL.createObjectURL(file);
                    const a = document.createElement('a');

                    a.href = url;
                    a.download = file.name;

                    document.body.append(a);
                    a.click();
                    a.remove();
                }}
            >
                Download
            </Button>
        </div>

        <div
            className='editor-wrapper'
            ref={monacoRef}
            {...props}
        />
    </div>
}
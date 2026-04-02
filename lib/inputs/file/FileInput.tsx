import './styles/file-input.scss';
import { dragEvent } from '>helpers/events';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { ReactNode, useRef, useState } from 'react';
import { Input, type InputProps } from '>inputs/input/Input';
import { fileSizeDisplay } from '>inputs/file-drop-zone/helpers/file-size-display';

export interface FileInputProps extends InputProps {
    dropZoneText?: ReactNode
    multiselect?: {
        limit?: number
        min?: number
    }
    onFileChange?: (files: File[]) => void
}

export function FileInput(
    {
        className,
        dropZoneText = 'Drop Files Here',
        multiselect,
        onFileChange,
        required,
        ...props
    }: Readonly<FileInputProps>
) {

    const fileLimit = multiselect?.limit ?? 1;
    const fileLimitMin = multiselect?.min ?? 1;

    const [files, setFiles] = useState(new Map<string, File>());

    const dropZoneRef = useRef(null as null | HTMLDivElement);

    const onDrop = dragEvent<HTMLDivElement>((e) => {
        e.preventDefault();

        const cache = new Map(files);
        let didUpdate = false;

        if (e.dataTransfer.items) {
            [...e.dataTransfer.items].forEach((item) => {
                if (item.kind === 'file') {
                    const f = item.getAsFile();
                    if (f && cache.size < fileLimit) {
                        cache.set(f.name, f);
                        didUpdate = true;
                    }
                }
            });
        }
        else {
            [...e.dataTransfer.files].forEach((file) => {
                if (cache.size < fileLimit) {
                    cache.set(file.name, file);
                    didUpdate = true;
                }
            });
        }

        if (didUpdate) {
            setFiles(cache);

            if (onFileChange)
                onFileChange(Array.from(cache.values()));
        }
    });

    const onDragOver = dragEvent((e) => e.preventDefault());

    const onDragEnter = dragEvent(() => {
        if (!dropZoneRef.current)
            return;

        dropZoneRef.current.classList.add('dragged');
    });
    const onDragLeave = dragEvent(() => {
        if (!dropZoneRef.current)
            return;

        dropZoneRef.current.classList.remove('dragged');
    });

    return <div
        className={getClassName('file-input', className)}
    >
        <div
            className='file-drop-zone-wrapper f-body'
        >
            <div // NOSONAR - Allow interactive props on non-interactive element for drag and drop functionality
                className='file-drop-zone f-main'
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragOver={onDragOver}
                onDrop={onDrop}
                ref={dropZoneRef}
            >
                <span
                    className='label drop-zone-text'
                >
                    {dropZoneText}
                </span>

                <span
                    className='label allow-multiple-files'
                >
                    {fileLimit > 1 && `Limit: ${fileLimit}`}
                </span>

                <span
                    className='label allow-multiple-files'
                >
                    {fileLimitMin > 0 && `Required: ${fileLimitMin}`}
                </span>
            </div>
        </div>

        <Input
            className='file'
            multiple={fileLimit > 1}
            required={required}
            {...props}
            type='file'
        />

        {
            files.size > 0 &&
            <div
                className='dropped-files'
            >
                <ul
                    className='dropped-file-list'
                >
                    {
                        Array.from(files).map(([key, file]) => {
                            return <li
                                key={key}
                                className='dropped-file'
                            >
                                <span>
                                    {key}
                                </span>

                                <span>
                                    {fileSizeDisplay(file.size)}
                                </span>
                            </li>;
                        })
                    }
                </ul>
            </div>
        }
    </div >;
}
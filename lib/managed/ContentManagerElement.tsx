import './styles/content-manager.scss';
import { ContentManager } from "./ContentManager";
import { getClassName } from "$/helpers";
import { HTML_DivProps } from "#types/html";
import { ReactNode, useEffect, useState } from "react";

interface extContentManagerElementProps<T extends ContentManager> {
    manager: T
}

export type ContentManagerElementProps<T extends ContentManager> = HTML_DivProps & extContentManagerElementProps<T>;

export function ContentManagerElement<T extends ContentManager>(
    {
        manager,
        className,
        ...props
    }: ContentManagerElementProps<T>
) {

    const [ready, isReady] = useState(false);
    const [content, setContent] = useState([] as [string, ReactNode][]);

    useEffect(() => {
        manager.setRefreshFn((c) => {
            setContent(c);
            isReady(false);
        });

        return () => {
            manager.setRefreshFn();
        }
    }, []);

    useEffect(() => {
        if (!ready)
            isReady(true);
    }, [ready]);

    return (ready && content.length > 0) &&
        <div
            className={getClassName('content-manager', manager.id, className)}
            {...props}
        >
            {
                content.map(([key, value]) => {
                    return <div
                        key={key}
                        id={`content_wrapper:${key}`}
                        className='content-wrapper'
                    >
                        {value}
                    </div>
                })
            }
        </div>
}
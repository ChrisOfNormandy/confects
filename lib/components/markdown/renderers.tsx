import { ClassAttributes, HTMLAttributes, ReactNode } from "react";
import { CodeEditor, CodeEditorProps, getClassName, isInterfaceTypeIterable } from "@lib/main";
import { Components, ExtraProps } from "react-markdown";
import { processingOrder } from "./patterns";
import { v4 } from "uuid";

export type ElementProps<T extends HTMLElement> = ClassAttributes<T> & HTMLAttributes<T> & ExtraProps;

function repl(str: string, pattern: RegExp, element: (m: RegExpMatchArray) => ReactNode) {
    let m = str.match(pattern);
    if (!m)
        return [str];

    if (!m[1])
        m[1] = '';

    const i = str.indexOf(m[0]);
    const l = m[0].length;

    return [
        str.slice(0, i),
        element(m),
        str.slice(i + l)
    ]
}

function process(arr: (string | ReactNode)[]) {
    processingOrder.forEach(({ element, pattern }) => {
        arr.forEach((str, s) => {
            if (typeof str === 'string')
                arr.splice(s, 1, ...repl(str, pattern, element))
        });
    });

    return arr.filter((v) => v !== '');
}

function application<T extends HTMLElement>({ children, node }: ElementProps<T>): JSX.Element {
    if (Array.isArray(children)) {
        console.debug(node?.tagName, children);

        const cache = new Map<number, ReactNode>();
        const temp = children.map((c, i) => {
            if (typeof c === 'object') {
                cache.set(i, c);

                return `OBJECT:${i}`
            }

            return c
        }).join('');

        const val = process([temp]);

        const repl = val.map((v) => {
            if (
                !v ||
                typeof v === 'number' ||
                typeof v === 'boolean' ||
                typeof v === 'object' &&
                isInterfaceTypeIterable(v)
            ) {
                return <p>{v}</p>
            }

            if (typeof v === 'string') {
                let ret: ReactNode[] = [v];

                const loop = () => {
                    let doLoop = false;

                    ret.forEach((part, p) => {
                        if (typeof part !== 'string')
                            return;

                        cache.forEach((value, n) => {
                            const key = `OBJECT:${n}`;
                            const i = part.indexOf(key);
                            const l = key.length;

                            if (i === -1)
                                return;

                            doLoop = true;

                            const splice = [
                                part.slice(0, i),
                                value,
                                part.slice(i + l)
                            ];

                            ret.splice(p, 1, ...splice);
                        });
                    });

                    if (doLoop)
                        loop();
                }

                loop();

                return ret.map((r, i) => typeof r !== 'object' ? <span key={i}>{r}</span> : r);
            }

            return v;
        })

        return <p>{repl}</p>;
    }

    if (typeof children !== 'string') {
        // console.debug(children);

        return <>{children}</>;
    }

    const processed = process([children]);

    if (processed.length === 1) {
        const [content] = processed;

        if (typeof content !== 'object')
            return <p>
                {content}
            </p>

        return <>{content}</>;
    }

    // console.debug('PROCESSED:', processed);

    return <p>{processed}</p>
}

export const renderers: Partial<Components> = {
    p: (props) => application<HTMLParagraphElement>(props),
    code: ({ children, node, className, ...props }) => {
        const spl = children?.toString().split(/\n/g);
        if (!spl)
            return <code className={getClassName('f-body', className)} />;

        const m = spl[0]?.match(/^\/\/ md-flags: (.+)/);
        if (m) {
            const content = spl.slice(1).join('\n').trim();

            const flags = m[1]?.split(/;/g).map((s) => s.trim());
            if (!flags)
                return null;

            if (flags.includes('editor')) {
                let props: CodeEditorProps = {
                    id: `editor:${v4()}`
                };

                flags.forEach((flag) => {
                    if (flag.match(/file=\w+/)) {
                        const fileName = flag.split('=')[1];

                        props.heading = fileName;
                        props.id = `editor:${fileName}`
                    }
                    else if (flag === 'download')
                        props.canDownload = true;
                })

                return <CodeEditor defaultValue={content} className='f-primary' {...props} />
            }

            return <code className={getClassName('f-body', className)} {...props}>{content}</code>
        }

        return <code className={getClassName('f-body', className)} {...props}>{children}</code>
    },
    blockquote: ({ children, node, ...props }) => <blockquote className='f-body' {...props}>{children}</blockquote>,
    h1: ({ children, node, ...props }) => <h1 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h1 >,
    h2: ({ children, node, ...props }) => <h2 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h2>,
    h3: ({ children, node, ...props }) => <h3 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h3>,
    h4: ({ children, node, ...props }) => <h4 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h4>,
    h5: ({ children, node, ...props }) => <h5 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h5>,
    h6: ({ children, node, ...props }) => <h6 {...props} id={(children || '').toString().toLowerCase().replace(/\s/g, '-')} className='heading'>{children}</h6>
}
import './styles/markdown-renderer.scss';
import { Button, downloadContent, getClassName, Glyph, HTML_DivProps, openInNewTab } from "../../main";
import { renderers } from "./renderers";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type MarkdownRendererProps = {
    defaultContent?: string
    href: string
} & HTML_DivProps;

export function MarkdownRenderer(
    {
        className,
        defaultContent,
        href,
        ...props
    }: MarkdownRendererProps
) {

    const [content, setContent] = useState(defaultContent);
    const [ready, isReady] = useState(true);
    const [raw, showRaw] = useState(false);

    useEffect(() => {
        if (ready) {
            console.log('FETCH:', href);

            fetch(href)
                .then((resp) => resp.text())
                .then((text) => setContent(text))
                .catch(console.error);
        }
        else
            isReady(true);
    }, [ready, href])

    if (!content) {
        return <div>
            Fetching content...
        </div>;
    }

    return <div
        className={getClassName('markdown-renderer f-body', className)}
        {...props}
    >
        <div
            className='md-header f-primary'
        >
            <Button
                className='f-trinary'
                onClick={() => isReady(false)}
            >
                Reload
            </Button>

            <div
                className='raw-toggle'
            >
                <Button
                    onClick={() => showRaw(false)}
                    className={getClassName('show-pretty f-trinary', raw && 'l2-f' || 'd2-f')}
                >
                    Pretty
                </Button>

                <Button
                    onClick={() => showRaw(true)}
                    className={getClassName('show-raw f-trinary', !raw && 'l2-f' || 'd2-f')}
                >
                    Raw
                </Button>
            </div>

            <Glyph
                className='f-trinary'
                icon='printer'
                onClick={() => openInNewTab(content)}
                title='Open in new tab'
            />

            <Glyph
                className='f-trinary'
                icon='download'
                onClick={() => downloadContent(content)}
                title='Download as text file'
            />
        </div>

        <div
            className='md-body'
        >
            <div
                className={getClassName('md-content f-content', raw && 'raw')}
            >
                {
                    raw
                        ? <div>
                            {content.split(/\n/g).map((line, i) => {
                                if (!line)
                                    return <br key={i} />;

                                return <p
                                    key={i}
                                >
                                    {line}
                                </p>
                            })}
                        </div>
                        : <Markdown
                            remarkPlugins={[remarkGfm]}
                            components={renderers}
                        >
                            {content}
                        </Markdown>
                }
            </div>
        </div>

        <div
            className='md-footer f-secondary'
        >

        </div>
    </div>
}
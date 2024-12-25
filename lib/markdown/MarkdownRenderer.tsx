import './styles/markdown-renderer.scss';
import { Button, Glyph } from '$/buttons';
import { downloadContent, getClassName, openInNewTab } from '$/helpers';
import { HTML_DivProps } from '#types/html';
import { renderers } from './renderers';
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MarkdownFeatureFlags {
    reload?: boolean
    renderToggle?: boolean
    print?: boolean
    download?: boolean
    bodyOnly?: boolean
}

export type MarkdownRendererProps = {
    defaultContent?: string
    href: string
    features?: MarkdownFeatureFlags
} & HTML_DivProps;

export function MarkdownRenderer(
    {
        className,
        defaultContent,
        href,
        features = {},
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

    if (features.bodyOnly) {
        return <div
            className={getClassName('markdown-renderer', className)}
            {...props}
        >
            <MarkdownBody
                raw={raw}
                markdownContent={content}
                className={className}
            />
        </div>;
    }

    return <div
        className={getClassName('markdown-renderer f-body', className)}
        {...props}
    >
        <div
            className='md-header f-primary'
        >
            {
                features.reload &&
                <Button
                    className='f-trinary'
                    onClick={() => isReady(false)}
                >
                    Reload
                </Button>
            }

            {
                features.renderToggle &&
                <div
                    className='render-controls'
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
            }

            {
                (
                    features.print ||
                    features.download
                ) &&
                <div
                    className='file-controls'
                >
                    {
                        features.print &&
                        <Glyph
                            className='f-trinary'
                            icon='printer'
                            onClick={() => openInNewTab(content)}
                            title='Open in new tab'
                        />
                    }

                    {
                        features.download &&
                        <Glyph
                            className='f-trinary'
                            icon='download'
                            onClick={() => downloadContent(content)}
                            title='Download as text file'
                        />
                    }
                </div>
            }
        </div>

        <MarkdownBody
            raw={raw}
            markdownContent={content}
            className='f-content'
        />

        <div
            className='md-footer f-secondary'
        >

        </div>
    </div>
}

type MarkdownBodyProps = HTML_DivProps & {
    raw: boolean
    markdownContent: string
}

function MarkdownBody(
    {
        raw,
        markdownContent,
        className,
    }: MarkdownBodyProps
) {
    return <div
        className='md-body'
    >
        <div
            className={getClassName('md-content', raw && 'raw', className)}
        >
            {
                raw
                    ? <div>
                        {markdownContent.split(/\n/g).map((line, i) => {
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
                        {markdownContent}
                    </Markdown>
            }
        </div>
    </div>
}
import './styles/markdown-renderer.scss';
import { getClassName } from 'lib/helpers';
import { HTML_DivProps } from 'lib/types';
import { Loading } from 'lib/decorations';
import { MarkdownBody } from './fragments/MarkdownBody';
import { MarkdownFeatureFlags, MarkdownHeader } from './fragments/MarkdownHeader';
import { useEffect, useState } from 'react';
import { MarkdownFooter } from './fragments/MarkdownFooter';

export type MarkdownRendererProps = {
    defaultContent?: string
    features?: MarkdownFeatureFlags
    href?: string
} & HTML_DivProps;

export function MarkdownRenderer(
    {
        className,
        defaultContent,
        features = {},
        href,
        ...props
    }: MarkdownRendererProps
) {

    const [content, setContent] = useState(defaultContent);
    const [raw, showRaw] = useState(false);
    const [ready, isReady] = useState(true);

    const loadFromHref = async () => {
        if (!href)
            return;

        try {
            const response = await fetch(href);
            const text = await response.text();
            setContent(text);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (ready)
            loadFromHref();
        else
            isReady(true);
    }, [ready, href]);

    if (!content) {
        return <Loading>
            Fetching content...
        </Loading>;
    }

    return <div
        className={getClassName('markdown-renderer f-body', className)}
        {...props}
    >
        <MarkdownHeader
            content={content}
            features={features}
            raw={raw}
            showRaw={showRaw}
            reload={loadFromHref}
        />

        <MarkdownBody
            className='f-content'
            markdownContent={content}
            raw={raw}
        />

        <MarkdownFooter
            features={features}
        />
    </div>;
}
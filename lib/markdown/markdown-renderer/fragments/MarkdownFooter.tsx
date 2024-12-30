import { HTML_DivProps } from "#types/html"
import { MarkdownFeatureFlags } from "./MarkdownHeader"

export type MarkdownFooterProps = {
    features?: MarkdownFeatureFlags
} & HTML_DivProps;

export function MarkdownFooter(
    {
        features,
        ...props
    }: MarkdownFooterProps
) {
    if (features?.bodyOnly)
        return null;

    return <div
        className='md-footer f-secondary'
        {...props}
    >

    </div>
}
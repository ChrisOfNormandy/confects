import { Button } from "$/buttons";
import { Content, ContentBlock, ContentDivider, ContentGroup, ContentList, ContentListItem, ContentTileGroup, ContentTileGroupProps, ContentTileProps } from "$/contents";
import { ContentLayoutSchema, ContentSchema, isContentGroupSchema, isContentImageSchema, isContentListSchema, isContentMarkdownSchema, isContentTileGroupSchema } from "./content/types"
import { getClassName } from "$/helpers";
import { HTML_DivProps } from "#types/html";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { useEffect, useRef, useState } from "react"

export type ContentRendererProps = {
    defaultContent?: ContentLayoutSchema
    href: string
} & HTML_DivProps;

export default function ContentRenderer(
    {
        className,
        defaultContent,
        href,
        ...props
    }: ContentRendererProps
) {
    const [content, setContent] = useState(defaultContent);
    const [ready, isReady] = useState(true);

    const ref = useRef(null as null | HTMLDivElement);

    useEffect(() => {
        if (ready) {
            console.log('FETCH:', href);

            fetch(href)
                .then((resp) => resp.json() as Promise<ContentLayoutSchema>)
                .then((data) => setContent(data))
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
        className={getClassName('content-renderer', className)}
        ref={ref}
        {...props}
    >
        <Button
            onClick={
                () => {
                    if (!ref.current)
                        return;

                    const printWindow = window.open('', 'print_window');

                    if (!printWindow)
                        return;

                    const elementHtml = ref.current.outerHTML;

                    printWindow.document.write('<html><head><title>Print</title>');
                    printWindow.document.write('<style>body { font-family: Arial, sans-serif; }</style>'); // Add any styles you want here
                    printWindow.document.write('</head><body>');
                    printWindow.document.write(elementHtml);
                    printWindow.document.write('</body></html>');

                    // Close the document to finish writing
                    printWindow.document.close();

                    // Wait for the content to load and then trigger the print dialog
                    printWindow.onload = function () {
                        printWindow.print();
                        // printWindow.close();
                    };
                }
            }
        >
            Print
        </Button>

        <SchemaRenderer
            schema={content}
        />
    </div>
}

function SchemaRenderer(
    {
        schema
    }: { schema: ContentLayoutSchema }
) {
    return <>
        {
            schema.title &&
            <title>
                {schema.title}
            </title>
        }

        {
            schema.layout.map((blockSchema, bS) => {
                console.log('block content', bS, blockSchema);

                return <ContentBlock>
                    {
                        blockSchema.content.map((blockContent, bC) => {
                            console.log('to define:', bC, blockContent);

                            if (blockContent === null)
                                return <ContentDivider />

                            if (isContentTileGroupSchema(blockContent)) {
                                console.log('tile group', blockContent.tiles.content);

                                return <ContentTileGroup
                                    key={bC}
                                    tiles={blockContent.tiles.content as ContentTileProps[]}
                                    {...blockContent.tiles.options as ContentTileGroupProps | undefined}
                                />
                            }

                            if (isContentGroupSchema(blockContent)) {
                                console.log('is group')

                                return <ContentGroup
                                    key={bC}
                                >
                                    {
                                        blockContent.group.map((groupContent, gC) => {
                                            console.log('group', gC, groupContent)

                                            return <RenderContent
                                                key={gC}
                                                schema={groupContent}
                                            />
                                        })
                                    }
                                </ContentGroup>
                            }

                            if (isContentListSchema(blockContent)) {
                                console.log('list');

                                return <ContentList
                                    key={bC}
                                >
                                    {
                                        blockContent.list.map((listContent, lC) => {
                                            console.log('list', lC, listContent);

                                            return <ContentListItem
                                                key={lC}
                                            >
                                                {
                                                    listContent.content.map((listContentItem, lCI) => {
                                                        console.log('list item', lCI, listContent)

                                                        return <RenderContent
                                                            key={lCI}
                                                            schema={listContentItem}
                                                        />
                                                    })
                                                }

                                            </ContentListItem>
                                        })
                                    }
                                </ContentList>
                            }

                            console.log('unknown content', blockContent)

                            return <RenderContent
                                key={bC}
                                schema={blockContent}
                            />
                        })
                    }
                </ContentBlock>
            })
        }
    </>
}

function RenderContent(
    {
        schema
    }: { schema: ContentSchema }
) {

    console.log('render content:', schema);

    const { content } = schema;

    if (!content) {
        console.warn(schema);

        return <div>UNDEFINED</div>
    }

    if (isContentMarkdownSchema(content)) {
        return <Content>
            <MarkdownRenderer
                href={content.href}
                features={
                    {
                        bodyOnly: true
                    }
                }
            />
        </Content>
    }

    if (isContentImageSchema(content)) {
        return <Content>
            <figure>
                <img
                    src={content.image.src}
                />

                {
                    content.caption &&
                    <figcaption>
                        {content.caption}
                    </figcaption>
                }
            </figure>
        </Content>
    }

    return <Content>
        {content.text}
    </Content>
}
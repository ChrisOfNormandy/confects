import { Button } from '@buttons';
import { ContentLayoutSchema } from './content/types';
import { getClassName } from '#helpers';
import { HTML_DivProps } from '#types';
import { useEffect, useRef, useState } from 'react';
import { SchemaRenderer } from './fragments/SchemaRenderer';

export type ContentRendererProps = {
    defaultContent?: ContentLayoutSchema
    href: string
} & HTML_DivProps;

export function ContentRenderer(
    {
        className,
        defaultContent,
        href,
        ...props
    }: ContentRendererProps
) {
    const [content, setContent] = useState(defaultContent);
    const [ready, isReady] = useState(true);

    const ref = useRef<HTMLDivElement>(null);

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
    }, [ready, href]);

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
    </div>;
}

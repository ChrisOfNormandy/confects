import { MarkdownRenderer } from "@lib/main";
import { Display } from "./helpers/formatters";

export default function EverythingElse() {
    return <Display heading='everything-else'>
        <MarkdownRenderer
            href='/pages/testing.md'
        />
    </Display>
}
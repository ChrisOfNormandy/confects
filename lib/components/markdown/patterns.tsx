import { HTMLElementProps } from "@lib/main";
import { ReactNode } from "react";
import TableOfContents from "./fragments/TableOfContents";

interface Processor {
    element: (m: RegExpMatchArray) => ReactNode,
    pattern: RegExp
}

/*
    Highlight:      ||text||
    Superscript:    ^text^
    Subscript:      ~text^
*/

const HIGHLIGHT_SYNTAX = /\|\|(.*)\|\|/;
const SUPERSCRIPT_SYNTAX = /[^\^]\^([^\^]*)\^/;
const SUBSCRIPT_SYNTAX = /~([^\^]*)\^/;
const STYLE_SYNTAX = /%\((.+)\)(.*)%/;
const TOC_SYNTAX = /\[TOC\]/;

export const HIGHLIGHT_PROCESS: Processor = {
    element: (m) => {
        return <span
            className='highlight f-primary'
        >
            {m[1]}
        </span>
    },
    pattern: HIGHLIGHT_SYNTAX
};

export const SUPERSCRIPT_PROCESS: Processor = {
    element: (m) => {
        return <sup>
            {m[1]}
        </sup>
    },
    pattern: SUPERSCRIPT_SYNTAX
};

export const SUBSCRIPT_PROCESS: Processor = {
    element: (m) => {
        return <sub>
            {m[1]}
        </sub>
    },
    pattern: SUBSCRIPT_SYNTAX
};

export function getAppliedStyles(tag: string, value: ReactNode) {
    const tagArr = tag.split(/;/g);
    const tags: HTMLElementProps = {};

    tagArr.forEach((tag) => {
        const [key, value] = tag.split('=');
        if (key === undefined || value === undefined)
            return;

        switch (key) {
            case 'class': {
                tags.className = value;
                break;
            }
            case 'style': {
                tags.style = JSON.parse(value);
                break;
            }
        }
    });

    return <span
        {...tags}
    >
        {value}
    </span>
}

export const STYLE_PROCESS: Processor = {
    element: (m) => {
        if (!m[1])
            return m[2];

        return getAppliedStyles(m[1], m[2])
    },
    pattern: STYLE_SYNTAX
}

export const TOC_PROCESS: Processor = {
    element: () => {
        return <TableOfContents />
    },
    pattern: TOC_SYNTAX
}

export const processingOrder: Processor[] = [
    HIGHLIGHT_PROCESS,
    SUPERSCRIPT_PROCESS,
    SUBSCRIPT_PROCESS,
    STYLE_PROCESS,
    TOC_PROCESS
];
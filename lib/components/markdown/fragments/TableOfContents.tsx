import { useEffect, useRef, useState } from "react";
import './styles/toc.scss';

const MAX_CLIMB_ATTEMPTS = 20;

const HEADING_MAP = new Map<string, number>(
    [
        ['H1', 1],
        ['H2', 2],
        ['H3', 3],
        ['H4', 4],
        ['H5', 5],
        ['H6', 6]
    ]
);

class HeadingNode {
    id: string
    tier: number
    prev?: HeadingNode
    next: HeadingNode[] = [];

    clear() {
        this.prev = undefined;
        this.next = [];
    }

    addNext(next: HeadingNode) {
        this.next.push(next.addParent(this));

        return next;
    }

    parent() {
        if (!this.prev)
            throw new Error('Undefined parent');

        return this.prev;
    }

    addParent(parent: HeadingNode) {
        this.prev = parent;

        return this;
    }

    constructor(id: string, tier: number, prev?: HeadingNode) {
        this.id = id;
        this.tier = tier;
        this.prev = prev;
    }
}

export function TableOfContents() {

    const ref = useRef(null as HTMLSpanElement | null);
    const [root] = useState(new HeadingNode('', 0));
    const [ready, isReady] = useState(false);

    useEffect(() => {
        if (!ref.current)
            return;

        let attempts = 0;
        let mdParent = ref.current.parentElement;
        while (mdParent && !mdParent.classList.contains('markdown-renderer') && attempts < MAX_CLIMB_ATTEMPTS) {
            mdParent = mdParent.parentElement;
            attempts++;
        }

        if (!mdParent || !mdParent.classList.contains('markdown-renderer'))
            return

        root.clear();

        const mapping = new Map<string, HeadingNode>();
        const all = mdParent.querySelectorAll('*');

        let pointer: HeadingNode;
        all.forEach((element) => {
            if (element instanceof HTMLHeadingElement) {
                const tier = HEADING_MAP.get(element.tagName);
                if (!tier)
                    return;

                const heading = new HeadingNode(element.id, tier);
                mapping.set(heading.id, heading);

                if (!pointer) {
                    pointer = root.addNext(heading);

                    return;
                }

                if (tier === pointer.tier) {
                    pointer = pointer.parent().addNext(heading);
                }
                else if (tier > pointer.tier) {
                    pointer = pointer.addNext(heading);
                }
                else {
                    let parent = pointer.parent();

                    while (parent && parent.tier !== tier - 1)
                        parent = parent.parent();

                    pointer = parent.addNext(heading);
                }
            }
        });

        isReady(true);
    }, [ref])

    return <span
        ref={ref}
        className='toc'
    >
        {
            ready &&
            <TOCItem heading={root} />
        }
    </span>
}

function TOCItem(
    {
        heading
    }: { heading: HeadingNode }
) {
    if (!heading.id) {
        return <ul
            className='toc-list root'
        >
            {
                heading.next.map((next) => {
                    return <TOCItem
                        key={next.id}
                        heading={next}
                    />
                })
            }
        </ul>
    }

    return <li
        className='toc-item'
    >
        <a
            href={`#${heading.id}`}
        >
            {heading.id.replace(/-/g, ' ')}
        </a>

        {
            heading.next.length > 0 &&
            <ul
                className='toc-list'
            >
                {
                    heading.next.map((next) => {
                        return <TOCItem
                            key={next.id}
                            heading={next}
                        />
                    })
                }
            </ul>
        }
    </li>
}
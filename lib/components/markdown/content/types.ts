export interface ContentLayoutSchema {
    title?: string
    layout: ContentBlockSchema[]
}

interface ContentBlockSchema {
    content: (ContentSchema | ContentListSchema | ContentGroupSchema | ContentTileGroupSchema | null)[]
}

export interface ContentSchema {
    content: ContentMarkdownSchema | ContentImageSchema | ContentTextSchema
}

// export function isContentSchema(obj: unknown): obj is ContentSchema {
//     return 'content' in (obj as ContentSchema);
// }

interface ContentMarkdownSchema {
    href: string
}

export function isContentMarkdownSchema(obj: unknown): obj is ContentMarkdownSchema {
    return 'href' in (obj as ContentMarkdownSchema);
}

interface ContentImageSchema {
    image: {
        src: string
    }
    caption?: string
}

export function isContentImageSchema(obj: unknown): obj is ContentImageSchema {
    return 'image' in (obj as ContentImageSchema);
}

interface ContentTextSchema {
    text: string
}

// export function isContentTextSchema(obj: unknown): obj is ContentTextSchema {
//     return 'text' in (obj as ContentTextSchema);
// }

interface ContentListSchema {
    list: ContentListItemSchema[]
}

export function isContentListSchema(obj: unknown): obj is ContentListSchema {
    return 'list' in (obj as ContentListSchema);
}

interface ContentListItemSchema {
    content: ContentSchema[]
}

// export function isContentListItemSchema(obj: unknown): obj is ContentListItemSchema {
//     return 'content' in (obj as ContentListItemSchema) && isContentImageSchema((obj as ContentListItemSchema).content)
// }

interface ContentGroupSchema {
    group: ContentSchema[]
}

export function isContentGroupSchema(obj: unknown): obj is ContentGroupSchema {
    return 'group' in (obj as ContentGroupSchema);
}

interface ContentTileGroupSchema {
    tiles: {
        options: ContentTileGroupOptions
        content: ContentTileSchema[]
    }
}

export function isContentTileGroupSchema(obj: unknown): obj is ContentTileGroupSchema {
    return 'tiles' in (obj as ContentTileGroupSchema);
}

interface ContentTileGroupOptions {
    perRow?: number
}

interface ContentTileSchema {
    figure?: {
        image: ContentImageSchema
        caption?: ContentSchema
    }
}
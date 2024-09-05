export interface ContentLayoutSchema {
    title?: string;
    layout: ContentBlockSchema[];
}
interface ContentBlockSchema {
    content: (ContentSchema | ContentListSchema | ContentGroupSchema | ContentTileGroupSchema | null)[];
}
export interface ContentSchema {
    content: ContentMarkdownSchema | ContentImageSchema | ContentTextSchema;
}
interface ContentMarkdownSchema {
    href: string;
}
export declare function isContentMarkdownSchema(obj: unknown): obj is ContentMarkdownSchema;
interface ContentImageSchema {
    image: {
        src: string;
    };
    caption?: string;
}
export declare function isContentImageSchema(obj: unknown): obj is ContentImageSchema;
interface ContentTextSchema {
    text: string;
}
interface ContentListSchema {
    list: ContentListItemSchema[];
}
export declare function isContentListSchema(obj: unknown): obj is ContentListSchema;
interface ContentListItemSchema {
    content: ContentSchema[];
}
interface ContentGroupSchema {
    group: ContentSchema[];
}
export declare function isContentGroupSchema(obj: unknown): obj is ContentGroupSchema;
interface ContentTileGroupSchema {
    tiles: {
        options: ContentTileGroupOptions;
        content: ContentTileSchema[];
    };
}
export declare function isContentTileGroupSchema(obj: unknown): obj is ContentTileGroupSchema;
interface ContentTileGroupOptions {
    perRow?: number;
}
interface ContentTileSchema {
    figure?: {
        image: ContentImageSchema;
        caption?: ContentSchema;
    };
}
export {};

import { ContentManager, ContentManagerElement } from "@";

export const menus = new ContentManager('menus');

export function MenuManager() {
    return <ContentManagerElement manager={menus} />
}
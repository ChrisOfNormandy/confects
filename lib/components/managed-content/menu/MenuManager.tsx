import { ContentManager } from "@managed/ContentManager";
import { ContentManagerElement } from "@managed/ContentManagerElement";

export const menus = new ContentManager('menus');

export function MenuManager() {
    return <ContentManagerElement manager={menus} />
}
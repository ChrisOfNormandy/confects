import { ContentManager } from "@managed/ContentManager";
import { ContentManagerElement } from "@managed/ContentManagerElement";

export const dialogs = new ContentManager('dialogs');

export function DialogManager() {
    return <ContentManagerElement manager={dialogs} />
}
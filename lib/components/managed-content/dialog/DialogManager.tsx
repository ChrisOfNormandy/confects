import { ContentManager, ContentManagerElement } from "@";

export const dialogs = new ContentManager('dialogs');

export function DialogManager() {
    return <ContentManagerElement manager={dialogs} />
}
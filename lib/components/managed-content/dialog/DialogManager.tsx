import ContentManager from "../ContentManager";
import ContentManagerElement from "../ContentManagerElement";

export const dialogs = new ContentManager('dialogs');

export default function DialogManager() {
    return <ContentManagerElement manager={dialogs} />
}
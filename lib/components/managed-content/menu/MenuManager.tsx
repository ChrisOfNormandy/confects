import ContentManager from "../ContentManager";
import ContentManagerElement from "../ContentManagerElement";

export const menus = new ContentManager('menus');

export default function MenuManager() {
    return <ContentManagerElement manager={menus} />
}
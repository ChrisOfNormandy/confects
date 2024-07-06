import MenuContent from "./MenuContent";

export default class MenuBuilder {
    readonly id: string

    private content: MenuContent[] = [];

    addItem() {
        const menuContent = new MenuContent(this.id);

        this.content.push(menuContent);

        return menuContent;
    }

    addSpacer() {
        const menuContent = new MenuContent(this.id, true);

        this.content.push(menuContent);

        return menuContent;
    }

    getContent() {
        return this.content;
    }

    constructor(id: string) {
        this.id = id;
    }
}
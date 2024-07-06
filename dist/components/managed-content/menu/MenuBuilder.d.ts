import MenuContent from "./MenuContent";
export default class MenuBuilder {
    readonly id: string;
    private content;
    addItem(): MenuContent;
    addSpacer(): MenuContent;
    getContent(): MenuContent[];
    constructor(id: string);
}

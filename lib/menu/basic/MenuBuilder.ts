import { ContentManager } from '@managed';
import { MenuProps, MenuContent } from '@menu';

export class MenuBuilder {
    readonly id: string;

    private readonly content: MenuContent[] = [];

    private position: DOMRect;

    readonly manager: ContentManager<MenuProps>;

    addContent() {
        const content = new MenuContent(this);
        this.content.push(content);

        return content;
    }

    attach<T extends HTMLElement>(ref: T) {
        this.position = ref.getBoundingClientRect();
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

    getProps(): MenuProps {
        console.log(this.content);

        return {
            id: this.id,
            menuContent: this.content,
            position: this.position
        };
    }

    constructor(manager: ContentManager<MenuProps>, id: string) {
        this.id = id;
        this.manager = manager;

        this.position = new DOMRect(0, 0);
    }
}
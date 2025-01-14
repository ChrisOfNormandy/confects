import { ComponentType } from 'react';
import { ContentManager } from './ContentManager';

export type IManagedContentProps = {
    id: string
} & object;

export class ManagedContent<P extends IManagedContentProps> {

    readonly id: string;

    private readonly manager: ContentManager<P>;

    private readonly Content: ComponentType<P>;

    hidden = false;

    open() {
        this.manager.open(this.id);

        return this;
    }

    close() {
        this.manager.close(this.id);

        return this;
    }

    hide() {
        this.hidden = true;

        return this;
    }

    show() {
        this.hidden = false;

        return this;
    }

    getContent() {
        return this.Content;
    }

    Render(props: P) {
        return <this.Content {...props} />;
    }

    constructor(manager: ContentManager<P>, id: string, content: ComponentType<P>) {
        this.manager = manager;
        this.id = id;
        this.Content = content;

        this.Render = this.Render.bind(this);
    }
}
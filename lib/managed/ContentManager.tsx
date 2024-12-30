import { ComponentType, Context, Dispatch } from "react";
import { IManagedContentProps, ManagedContent } from "./ManagedContent";
import { getClassName } from "#helpers/components";

export class ContentManager<P extends IManagedContentProps> {

    readonly id: string;
    private readonly content = new Map<string, ManagedContent<P>>();
    private updater?: Dispatch<boolean>;

    private context?: Context<ContentManager<P>>;

    setContext(context: Context<ContentManager<P>>) {
        this.context = context;
    }

    getContext() {
        return this.context;
    }

    private update() {
        if (!this.updater)
            throw new Error('Missing dispatcher function.');

        console.debug(this.id, ': Update')

        this.updater(false);

        return this;
    }

    getContent() {
        return Array.from(this.content.values()).map((content) => content.getContent());
    }

    add(id: string, content: ComponentType<P>) {
        console.debug(this.id, 'Add content', id);

        this.content.delete(id);
        const managedContent = new ManagedContent<P>(this, id, content);
        this.content.set(id, managedContent);

        return managedContent;
    }

    open(...ids: string[]) {
        if (ids.length === 0) {
            console.debug(this.id, ': Open all content');

            this.content.forEach((content) => content.show());
        }
        else {
            console.debug(this.id, ': Open by id ---', ...ids)

            ids.forEach((id) => this.content.get(id)?.show());
        }

        return this.update();
    }

    close(...ids: string[]) {
        if (ids.length === 0) {
            console.debug(this.id, ': Close all content')

            this.content.clear();
        }
        else {
            console.debug(this.id, ': Close by id ---', ...ids)

            ids.forEach((id) => this.content.delete(id));
        }

        return this.update();
    }

    getHidden() {
        return Array.from(this.content).filter(([, content]) => content.hidden);
    }

    getShown() {
        return Array.from(this.content).filter(([, content]) => !content.hidden);
    }

    Render(props?: P) {
        const shown = this.getShown();

        console.debug(this.id, ': Render', shown.length, 'items')

        return <div
            id={this.id}
            className={getClassName('content-manager', shown.length > 0 && 'with-content')}
        >
            {
                shown.map(([id, content]) => {
                    return <content.Render
                        {...props as P}
                        id={id}
                        key={id}
                    />
                })
            }
        </div>
    }

    constructor(id: string, updater: Dispatch<boolean>, context?: Context<ContentManager<P>>) {
        this.id = id;
        this.context = context;
        this.updater = updater;

        this.open = this.open.bind(this);
        this.Render = this.Render.bind(this);
    }
}
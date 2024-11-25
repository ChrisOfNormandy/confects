import { JSX } from "react";

export class ContentManager {

    readonly id: string;
    private _refresh?: (content: [string, JSX.Element][]) => void
    private content = new Map<string, JSX.Element>();
    private openIds = new Set<string>();

    /**
     * Defines the private refresh function.
     * @param fn Function that refreshes the "parent" JSX Element. Undefined clears it.
     * @returns 
     * 
     * ```
     *  function ExampleElement() {
     *      const [ready, isReady] = useState(false);
     * 
     *      useEffect(() => {
     *          contentManager.setRefreshFn(() => isReady(false));
     * 
     *          return () => {
     *              contentManager.setRefreshFn();
     *          }
     *      }, []);
     * 
     *      useEffect(() => {
     *          if (!ready)
     *              isReady(true);
     *      }, [ready]);
     * 
     *      // Display the managed content after this, using `ready`
     *      // as the render condition (if `false`, return `null` or other).
     *  }
     * ```
     */
    setRefreshFn(fn?: (content: [string, JSX.Element][]) => void) {
        this._refresh = fn;

        return this;
    }

    /**
     * Intended to be called by local methods only.
     * @param content 
     */
    private refresh(content: [string, JSX.Element][]) {
        if (!this._refresh)
            throw new Error('Cannot refresh (undefined function); define with setRefreshFn() first.');

        this._refresh(content);
    }

    store(id: string, content: JSX.Element) {
        this.content.set(id, content);

        return this;
    }

    private _open() {
        this.refresh(Array.from(this.content).filter(([id]) => this.openIds.has(id)))
    }

    open(...ids: string[]) {
        if (ids.length === 0)
            this.openIds = new Set(this.content.keys());
        else
            this.openIds = new Set(ids);

        return this._open();
    }

    close(...ids: string[]) {
        if (ids.length === 0)
            this.openIds.clear();
        else
            ids.forEach((id) => this.openIds.delete(id));

        return this._open();
    }

    constructor(id: string) {
        this.id = id;
    }
}
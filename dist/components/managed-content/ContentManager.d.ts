import { ReactNode } from "react";
export declare class ContentManager {
    readonly id: string;
    private _refresh?;
    private content;
    private openIds;
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
    setRefreshFn(fn?: (content: [string, ReactNode][]) => void): this;
    /**
     * Intended to be called by local methods only.
     * @param content
     */
    private refresh;
    store(id: string, content: ReactNode): this;
    private _open;
    open(...ids: string[]): void;
    close(...ids: string[]): void;
    constructor(id: string);
}

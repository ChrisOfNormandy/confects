import './styles/content-manager.scss';
import { ContentManager } from "./ContentManager";
import { HTML_DivProps } from "../../types/html";
interface extContentManagerElementProps<T extends ContentManager> {
    manager: T;
}
export type ContentManagerElementProps<T extends ContentManager> = HTML_DivProps & extContentManagerElementProps<T>;
export declare function ContentManagerElement<T extends ContentManager>({ manager, className, ...props }: ContentManagerElementProps<T>): false | import("react/jsx-runtime").JSX.Element;
export {};

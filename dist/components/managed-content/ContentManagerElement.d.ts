import { ContentManager, HTMLDivProps } from "../../main";
import './styles/content-manager.scss';
interface extContentManagerElementProps<T extends ContentManager> {
    manager: T;
}
export type ContentManagerElementProps<T extends ContentManager> = HTMLDivProps & extContentManagerElementProps<T>;
export default function ContentManagerElement<T extends ContentManager>({ manager, className, ...props }: ContentManagerElementProps<T>): false | import("react/jsx-runtime").JSX.Element;
export {};

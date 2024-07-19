import { HTML_SelectProps } from "../../../../main";
export interface SelectOption {
    label: string;
    value: string;
}
export type SelectProps = {
    options: SelectOption[];
} & HTML_SelectProps;
export declare function Select({ options, className, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;

import { ButtonProps, MenuBuilder } from "../../../main";
interface extMenuSummonButtonProps {
    id: string;
    builder: MenuBuilder;
    place?: 'top' | 'bottom' | 'left' | 'right';
}
export type MenuSummonButtonProps = ButtonProps & extMenuSummonButtonProps;
export declare function MenuSummonButton({ id, builder, place, ...props }: MenuSummonButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

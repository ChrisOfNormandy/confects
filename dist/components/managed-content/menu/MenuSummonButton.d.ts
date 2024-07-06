import { ButtonProps } from "@lib/main";
import MenuBuilder from "./MenuBuilder";
interface extMenuSummonButtonProps {
    id: string;
    builder: MenuBuilder;
    place?: 'top' | 'bottom' | 'left' | 'right';
}
export type MenuSummonButtonProps = ButtonProps & extMenuSummonButtonProps;
export default function MenuSummonButton({ id, builder, place, ...props }: MenuSummonButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

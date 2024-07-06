import { ButtonProps } from "../button/Button";
import './styles/badge.scss';
interface extBadgeProps {
    group?: string;
}
export type BadgeProps = ButtonProps & extBadgeProps;
export default function Badge({ children, className, group, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};

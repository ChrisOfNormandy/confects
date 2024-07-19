import { ButtonProps } from '../../../main';
import './styles/badge.scss';
interface extBadgeProps {
    group?: string;
}
export type BadgeProps = ButtonProps & extBadgeProps;
export declare function Badge({ children, className, group, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};

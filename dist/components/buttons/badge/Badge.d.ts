import './styles/badge.scss';
import { ButtonProps } from '../../../buttons';
interface extBadgeProps {
    group?: string;
}
export type BadgeProps = ButtonProps & extBadgeProps;
export declare function Badge({ children, className, group, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};

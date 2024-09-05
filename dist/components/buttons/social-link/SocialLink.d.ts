import './styles/social-link.scss';
import { BrandName } from '../../../types/brands';
import { ButtonProps } from '../../../buttons';
interface extBrandButtonProps {
    brand: BrandName;
    fill?: boolean;
    withLabel?: boolean;
}
type BrandButtonProps = ButtonProps & extBrandButtonProps;
interface extSocialLinkProps {
    profileHref?: string;
    pageHref?: string;
}
export type SocialLinkProps = BrandButtonProps & extSocialLinkProps;
export declare function SocialLink({ profileHref, pageHref, ...props }: SocialLinkProps): import("react/jsx-runtime").JSX.Element;
export {};

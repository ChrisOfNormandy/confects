import './styles/social-link.scss';
import { BrandName } from '../../../helpers/brands';
import { ButtonProps } from '../../buttons/button/Button';
interface extBrandButtonProps {
    brand: BrandName;
    fill?: boolean;
    withLabel?: boolean;
}
export type BrandButtonProps = ButtonProps & extBrandButtonProps;
interface extSocialLinkProps {
    profileHref?: string;
    pageHref?: string;
}
export type SocialLinkProps = BrandButtonProps & extSocialLinkProps;
export default function SocialLink({ profileHref, pageHref, ...props }: SocialLinkProps): import("react/jsx-runtime").JSX.Element;
export {};

import { getClassName } from "#helpers/components";
import { HTML_DivProps } from "#types/html";
import { ThemeProps, themes } from "@chrisofnormandy/confetti/themes";

export type ModalHeaderProps = HTML_DivProps & ThemeProps;

export function ModalHeader(
    {
        children,
        className,
        theme,
        ...props
    }: ModalHeaderProps
) {
    return <div
        className={getClassName('modal-header', className, themes.getStyles(theme))}
        {...props}
    >
        {children}
    </div>
}
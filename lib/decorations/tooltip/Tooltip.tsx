import { getClassName } from '@dead-harbour/shipshape/props';
import { useThemes } from '>providers/themes/ThemeProvider';
import { ITooltip, Tooltip } from 'react-tooltip';

type TooltipProps = ITooltip

function CustomTooltip(
    {
        className,
        classNameArrow,
        ...props
    }: Readonly<TooltipProps>
) {
    const { scheme } = useThemes();

    if (!props.id)
        return null;

    return <Tooltip
        className={getClassName('tooltip', className)}
        classNameArrow={getClassName('tooltip-arrow', classNameArrow)}
        delayHide={100}
        variant={scheme ?? undefined}
        {...props}
    />;
}

export { CustomTooltip as Tooltip };
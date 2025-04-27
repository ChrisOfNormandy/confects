import { themes } from '@chrisofnormandy/confetti/themes';
import { getClassName } from 'lib/helpers';
import { useEffect, useState } from 'react';
import { ITooltip, Tooltip } from 'react-tooltip';

type CustomTooltipProps = {
    id: string
} & ITooltip

function CustomTooltip(
    {
        id,
        className,
        classNameArrow,
        ...props
    }: CustomTooltipProps
) {
    const [colorScheme, setColorScheme] = useState(themes.getColorScheme());

    useEffect(() => {
        themes.addListener(id, (_, cs) => {
            setColorScheme(cs);
        });

        return () => {
            themes.removeListener(id);
        };
    }, []);

    return <Tooltip
        className={getClassName('tooltip', className)}
        classNameArrow={getClassName('tooltip-arrow', classNameArrow)}
        delayHide={100}
        delayShow={500}
        variant={colorScheme}
        {...props}
        id={id}
    />;
}

export { CustomTooltip as Tooltip };
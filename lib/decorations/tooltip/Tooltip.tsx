import { themes } from '@chrisofnormandy/confetti/themes';
import { getClassName, uniqueId } from 'lib/helpers';
import { useEffect, useState } from 'react';
import { ITooltip, Tooltip } from 'react-tooltip';

function CustomTooltip(
    {
        className,
        classNameArrow,
        ...props
    }: ITooltip
) {
    const [id] = useState(props.id || uniqueId('tooltip_'));
    const [mediaScheme, setMediaScheme] = useState(themes.getColorScheme());

    useEffect(() => {
        themes.addListener(id, (_, mediaScheme) => {
            setMediaScheme(mediaScheme);
        });

        return () => {
            themes.removeListener(id);
        };
    }, []);

    return <Tooltip
        className={getClassName('tooltip', className)}
        classNameArrow={getClassName('tooltip-arrow', classNameArrow)}
        delayShow={500}
        delayHide={100}
        variant={mediaScheme}
        {...props}
    />;
}

export { CustomTooltip as Tooltip };
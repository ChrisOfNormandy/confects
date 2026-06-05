import { HTML_InputProps } from '>types/html';
import { Glyph } from '>buttons/glyph/Glyph';
import { useEffect, useState } from 'react';

const MAX_HOUR = 23;
const MAX_MINUTE = 59;
const MAX_SECOND = 59;
const HOUR_DEG = 30;
const HOUR_MIN_DEG = 0.5;
const MIN_SEC_DEG = 6;

export interface AnalogClockProps {
    name: string
    input?: HTML_InputProps
    use24hr?: boolean
    onTimeChange?: (time: Date) => void
    defaultValue?: Date
}

export function AnalogClock(
    {
        name,
        input,
        defaultValue,
        ...props
    }: Readonly<AnalogClockProps>
) {

    const [hour, setHour] = useState<number>(defaultValue?.getHours() || 0);
    const [minute, setMinute] = useState<number>(defaultValue?.getMinutes() || 0);
    const [second, setSecond] = useState<number>(defaultValue?.getSeconds() || 0);

    const updateTime = (h: number, m: number, s: number) => {
        if (h < 0)
            setHour(MAX_HOUR);
        else if (h > MAX_HOUR)
            setHour(0);
        else
            setHour(h);

        if (m < 0)
            setMinute(MAX_MINUTE);
        else if (m > MAX_MINUTE)
            setMinute(0);
        else
            setMinute(m);

        if (s < 0)
            setSecond(MAX_SECOND);
        else if (s > MAX_SECOND)
            setSecond(0);
        else
            setSecond(s);
    };

    const { onTimeChange } = props;

    useEffect(() => {
        onTimeChange?.(new Date(0, 0, 0, hour, minute, second, 0));
    }, [
        hour,
        minute,
        onTimeChange,
        second
    ]);

    return <>
        <input {...input} hidden name={name} type='time' />

        <div
            className='analog-clock'
        >
            <div
                className='hand hour'
                style={
                    {
                        transform: `rotate(${hour * HOUR_DEG + minute * HOUR_MIN_DEG}deg)`
                    }
                }
            />

            <div
                className='hand minute'
                style={
                    {
                        transform: `rotate(${minute * MIN_SEC_DEG}deg)`
                    }
                }
            />

            <div
                className='hand second'
                style={
                    {
                        transform: `rotate(${second * MIN_SEC_DEG}deg)`
                    }
                }
            />
        </div>

        <div>
            <div>
                <Glyph
                    icon='dash-lg'
                    onClick={() => updateTime(hour - 1, minute, second)}
                />

                <Glyph
                    icon='plus-lg'
                    onClick={() => updateTime(hour + 1, minute, second)}
                />
            </div>

            <div>
                <Glyph
                    icon='dash-lg'
                    onClick={() => updateTime(hour, minute - 1, second)}
                />

                <Glyph
                    icon='plus-lg'
                    onClick={() => updateTime(hour, minute + 1, second)}
                />
            </div>

            <div>
                <Glyph
                    icon='dash-lg'
                    onClick={() => updateTime(hour, minute, second - 1)}
                />

                <Glyph
                    icon='plus-lg'
                    onClick={() => updateTime(hour, minute, second + 1)}
                />
            </div>
        </div>
    </>;
}
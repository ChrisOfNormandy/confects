import { HTML_InputProps } from '#types';
import { Input } from '@inputs';
import { Select, SelectOption } from '@selectors';
import { useEffect, useState } from 'react';

const MAX_HOUR_12 = 12;
const MAX_HOUR_24 = 23;

export interface DigitalClockProps {
    name: string
    input?: HTML_InputProps
    use24hr?: boolean
    onTimeChange?: (time: Date) => void
    defaultValue?: Date
}

export default function DigitalClock(
    {
        name,
        input,
        use24hr = false,
        defaultValue,
        ...props
    }: DigitalClockProps
) {

    const [hour, setHour] = useState<number>(defaultValue?.getHours() || 0);
    const [minute, setMinute] = useState<number>(defaultValue?.getMinutes() || 0);
    const [second, setSecond] = useState<number>(defaultValue?.getSeconds() || 0);
    const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

    useEffect(() => {
        if (props.onTimeChange)
            props.onTimeChange(new Date(0, 0, 0, hour, minute, second, 0));
    }, [
        hour,
        minute,
        second,
        period
    ]);

    let minHour = 1;
    let maxHour = MAX_HOUR_12;

    if (use24hr) {
        minHour = 0;
        maxHour = MAX_HOUR_24;
    }

    return <>
        <input {...input} hidden name={name} type='time' />

        <div
            className='digital-clock'
        >
            <Input
                name={name + ':hour'}
                type='number'
                min={minHour}
                max={maxHour}
                onChange={(e) => {
                    const h = Number(e.target.value);
                    if (use24hr)
                        setHour(h);
                    else if (period === 'AM')
                        setHour(h - 1);
                    else
                        setHour(h + MAX_HOUR_12);
                }}
            />
            {':'}
            <Input
                name={name + ':minute'}
                type='number'
                min={0}
                max={59}
                onChange={(e) => setMinute(Number(e.target.value))}
            />
            {':'}
            <Input
                name={name + ':second'}
                type='number'
                min={0}
                max={59}
                onChange={(e) => setSecond(Number(e.target.value))}
            />

            {
                !use24hr &&
                <Select
                    name={name + ':period'}
                    options={['AM', 'PM'].map((v) => new SelectOption(v, v))}
                    onChange={(e) => setPeriod(e.target.value as 'AM' | 'PM')}
                />
            }
        </div>
    </>;
}
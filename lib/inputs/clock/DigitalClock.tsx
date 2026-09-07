import { Input } from '>inputs/input/Input';
import type { HtmlElementProps } from '>types/html';
import { useState } from 'react';

export interface DigitalClockProps {
    defaultValue?: Date;
    input?: HtmlElementProps<'input'>;
    name: string;
    onChange?: (time: Date) => void;
    use24hr?: boolean;
}

const MAX_HR_12 = 12;

function get12h(h: number) {
    if (h === 0 || h === MAX_HR_12) return MAX_HR_12;

    if (h < MAX_HR_12) return h + 1;

    return h - MAX_HR_12;
}

export function DigitalClock({ name, input, use24hr = false, defaultValue, onChange }: Readonly<DigitalClockProps>) {
    const [date, setDate] = useState(() => defaultValue ?? new Date());

    return (
        <>
            <input {...input} hidden name={name} type='time' />

            <div className='digital-clock'>
                <Input
                    name={`${name}:hour`}
                    type='number'
                    min={0}
                    max={23}
                    value={use24hr ? get12h(date.getHours()) : date.getHours()}
                    onChange={(e) =>
                        setDate((d) => {
                            const copy = new Date(d);
                            copy.setHours(Number.parseInt(e.currentTarget.value));
                            onChange?.(copy);
                            return copy;
                        })
                    }
                />
                :
                <Input
                    name={`${name}:minute`}
                    type='number'
                    min={0}
                    max={59}
                    value={date.getMinutes()}
                    onChange={(e) =>
                        setDate((d) => {
                            const copy = new Date(d);
                            copy.setMinutes(Number.parseInt(e.currentTarget.value));
                            onChange?.(copy);
                            return copy;
                        })
                    }
                />
                :
                <Input
                    name={`${name}:hour`}
                    type='number'
                    min={0}
                    max={59}
                    value={date.getSeconds()}
                    onChange={(e) =>
                        setDate((d) => {
                            const copy = new Date(d);
                            copy.setSeconds(Number.parseInt(e.currentTarget.value));
                            onChange?.(copy);
                            return copy;
                        })
                    }
                />
                {!use24hr && <div>{date.getHours() < MAX_HR_12 ? 'AM' : 'PM'}</div>}
            </div>
        </>
    );
}

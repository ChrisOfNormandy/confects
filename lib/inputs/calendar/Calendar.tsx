import './styles/calendar.scss';
import { HTML_InputProps } from '#types';
import { Button, Glyph } from '@buttons';
import { Select, SelectOption } from '@selectors';
import { useEffect, useState } from 'react';
import { getClassName } from '#helpers';
import { themes } from '@chrisofnormandy/confetti/themes';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const OLD_YEARS = 100;
const NEW_YEARS = 100;
const CURRENT_YEAR = new Date().getFullYear();
const DAYS_IN_MONTH = [
    31, // January
    28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31  // December
];

function isLeapYear(year: number) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function getDaysInMonth(year: number, month: number) {
    return month === 2 && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month - 1];
}

function getYears(oldYears: number, newYears: number) {
    return new Array(oldYears + newYears).fill(0)
        .map((_, i) => CURRENT_YEAR + i - oldYears);
}

const DEFAULT_YEARS = getYears(OLD_YEARS, NEW_YEARS);

function getDateRows(year: number, month: number) {
    const dateRows = new Array(6).fill([]) as number[][];
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const daysInMonth = getDaysInMonth(year, month);

    for (let i = 0; i < dateRows.length; i++) {
        dateRows[i] = new Array(7).fill(0);

        for (let j = 0; j < dateRows[i].length; j++) {
            const date = i * 7 + j - firstDayOfMonth + 1;

            if (date > 0 && date <= daysInMonth)
                dateRows[i][j] = date;
        }
    }

    return dateRows;
}

export interface CalendarProps {
    input?: HTML_InputProps
    onChange?: (date: Date) => void
    defaultValue?: Date
}

export function Calendar(
    {
        input,
        onChange,
        defaultValue
    }: CalendarProps
) {

    const [day, setDay] = useState<number>(defaultValue?.getDate() || 1);
    const [month, setMonth] = useState<number>(defaultValue?.getMonth() || 1);
    const [year, setYear] = useState<number>(defaultValue?.getFullYear() || CURRENT_YEAR);
    const [dateRows, setDateRows] = useState<number[][]>(getDateRows(year, month));

    useEffect(() => {
        if (month < 1) {
            setMonth(12);
            setYear(year - 1);
        }
        else if (month > 12) {
            setMonth(1);
            setYear(year + 1);
        }
    }, [month]);

    useEffect(() => {
        const daysInMonth = getDaysInMonth(year, month);

        if (day < 1)
            setDay(1);
        else if (day > daysInMonth)
            setDay(daysInMonth);
    });

    useEffect(() => {
        if (onChange)
            onChange(new Date(year, month - 1, day));

        setDateRows(getDateRows(year, month));
    }, [
        day,
        month,
        year
    ]);

    return <div
        className='calendar'
    >
        <input {...input} hidden type='date' />

        <div
            className={getClassName('calendar-header', themes.getStyles({ background: { style: 'primary' } }))}
        >
            <Glyph
                icon='chevron-left'
                onClick={() => setMonth(month - 1)}
                theme={{
                    background: { style: 'trinary' },
                    border: { style: 'trinary' }
                }}
            />

            <div
                className={getClassName('calendar-month', themes.getStyles({ background: { style: 'primary', mono: -2 } }))}
            >
                {MONTHS[month - 1]}
            </div>

            <Glyph
                icon='chevron-right'
                onClick={() => setMonth(month + 1)}
                theme={{
                    background: { style: 'trinary' },
                    border: { style: 'trinary' }
                }}
            />

            <Select
                options={DEFAULT_YEARS.map((y) => new SelectOption(y.toString(), y))}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                theme={{
                    background: { style: 'body' },
                    border: { style: 'content' }
                }}
            />
        </div>

        <table
            className={getClassName('calendar-body',
                themes.getStyles({
                    background: {
                        style: 'content',
                        mono: -1
                    }
                }))
            }
        >
            <thead>
                <tr>
                    {
                        [
                            'Su',
                            'Mo',
                            'Tu',
                            'We',
                            'Th',
                            'Fr',
                            'Sa'
                        ].map((d) => (
                            <th key={d}
                                className={getClassName('calendar-day',
                                    themes.getStyles({ background: { style: 'secondary' } }))
                                }
                            >
                                {d}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    dateRows.map((row, i) => (
                        <tr key={i}>
                            {
                                row.map((date, j) => {
                                    if (date === 0) {
                                        return <td key={j}>
                                            <Button
                                                disabled
                                            >
                                                &nbsp;
                                            </Button>
                                        </td>;
                                    }

                                    return <td
                                        key={j}
                                    >
                                        <Button
                                            onClick={() => setDay(date)}
                                            theme={
                                                {
                                                    background: {
                                                        style: date === day && 'primary' || 'content'
                                                    },
                                                    border: {
                                                        style: date === day && 'primary' || 'content'
                                                    }
                                                }
                                            }
                                        >
                                            {date}
                                        </Button>
                                    </td>;
                                })
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>;
}
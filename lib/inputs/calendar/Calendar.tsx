import './styles/calendar.scss';
import { HTML_InputProps } from '>types/html';
import { Button } from '>buttons/button/Button';
import { Select } from '>selectors/select/Select';
import { useEffect, useState } from 'react';
import { ThemeProps } from '@syren-dev-tech/confetti/themes';
import { uniqueKey } from '@syren-dev-tech/concauses/strings';
import { getClassName } from '@syren-dev-tech/concauses/props';
import { SelectOption } from '>selectors/select-option';
import { Glyph } from '>buttons/glyph/Glyph';

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
const DAYS_JANUARY = 31;
const DAYS_FEBRUARY = 28;
const DAYS_MARCH = 31;
const DAYS_APRIL = 30;
const DAYS_MAY = 31;
const DAYS_JUNE = 30;
const DAYS_JULY = 31;
const DAYS_AUGUST = 31;
const DAYS_SEPTEMBER = 30;
const DAYS_OCTOBER = 31;
const DAYS_NOVEMBER = 30;
const DAYS_DECEMBER = 31;

export const DAYS_IN_MONTH = [
    DAYS_JANUARY,
    DAYS_FEBRUARY,
    DAYS_MARCH,
    DAYS_APRIL,
    DAYS_MAY,
    DAYS_JUNE,
    DAYS_JULY,
    DAYS_AUGUST,
    DAYS_SEPTEMBER,
    DAYS_OCTOBER,
    DAYS_NOVEMBER,
    DAYS_DECEMBER
];

const LEAP_YEARS = 4;
const LEAP_YEARS_100 = 100;
const LEAP_YEARS_400 = 400;

function isLeapYear(year: number) {
    return year % LEAP_YEARS === 0 && (year % LEAP_YEARS_100 !== 0 || year % LEAP_YEARS_400 === 0);
}

const IS_FEB = 2;
const IS_FEB_LEAP = 29;

function getDaysInMonth(year: number, month: number) {
    return month === IS_FEB && isLeapYear(year) ? IS_FEB_LEAP : DAYS_IN_MONTH[month - 1];
}

function getYears(oldYears: number, newYears: number) {
    return new Array(oldYears + newYears).fill(0)
        .map((_, i) => CURRENT_YEAR + i - oldYears);
}

const DEFAULT_YEARS = getYears(OLD_YEARS, NEW_YEARS);
const CALENDAR_ROWS = 6;
const DAYS_IN_WEEK = 7;

function getDateRows(year: number, month: number) {
    const dateRows = new Array(CALENDAR_ROWS).fill([]) as number[][];
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const daysInMonth = getDaysInMonth(year, month);

    for (let i = 0; i < dateRows.length; i++) {
        dateRows[i] = new Array(DAYS_IN_WEEK).fill(0);

        for (let j = 0; j < dateRows[i].length; j++) {
            const date = i * DAYS_IN_WEEK + j - firstDayOfMonth + 1;

            if (date > 0 && date <= daysInMonth)
                dateRows[i][j] = date;
        }
    }

    return dateRows;
}

export interface CalendarProps extends ThemeProps {
    input?: HTML_InputProps
    onChange?: (date: Date) => void
    defaultValue?: Date
}

const LAST_MONTH = 12;

export function Calendar(
    {
        input,
        onChange,
        theme,
        defaultValue
    }: Readonly<CalendarProps>
) {

    const [day, setDay] = useState<number>(defaultValue?.getDate() || 1);
    const [month, setMonth] = useState<number>(defaultValue?.getMonth() || 1);
    const [year, setYear] = useState<number>(defaultValue?.getFullYear() || CURRENT_YEAR);
    const [dateRows, setDateRows] = useState<number[][]>(getDateRows(year, month));

    useEffect(() => {
        if (month < 1) {
            setMonth(LAST_MONTH);
            setYear(year - 1);
        }
        else if (month > LAST_MONTH) {
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
            className={getClassName('calendar-header', theme?.toClassName())}
        >
            <Glyph
                icon='chevron-left'
                onClick={() => setMonth(month - 1)}
                theme={theme}
            />

            <div
                className={getClassName('calendar-month', theme?.toClassName())}
            >
                {MONTHS[month - 1]}
            </div>

            <Glyph
                icon='chevron-right'
                onClick={() => setMonth(month + 1)}
                theme={theme}
            />

            <Select
                options={DEFAULT_YEARS.map((y) => new SelectOption(y.toString(), y))}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                theme={theme}
            />
        </div>

        <table
            className={getClassName('calendar-body', theme?.toClassName())}
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
                                className={getClassName('calendar-day', theme?.toClassName())}
                            >
                                {d}
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    dateRows.map((row) => (
                        <tr key={uniqueKey()}>
                            {
                                row.map((date) => {
                                    if (date === 0) {
                                        return <td key={uniqueKey()}>
                                            <Button
                                                disabled
                                            >
                                                &nbsp;
                                            </Button>
                                        </td>;
                                    }

                                    return <td
                                        key={uniqueKey()}
                                    >
                                        <Button
                                            onClick={() => setDay(date)}
                                            theme={theme}
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
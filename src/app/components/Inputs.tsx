import { CodeEditor, TextEditor } from 'lib/editors';
import { Display } from './helpers/formatters';
import { FileInput, Input, Slider, Toggle, ToggleIconType } from 'lib/inputs';
import { getClassName } from 'lib/helpers';
import { STYLES, themes } from '@chrisofnormandy/confetti/themes';

function InputDisplay() {
    return <Display heading='inputs' >
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        Array.from(STYLES).map((n) => {
                            const theme = themes.getBasicStyling(n)

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        defaultValue='Edit Me!'
                                    />

                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        placeholder='Add to Me!'
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        defaultValue="Don't Edit Me!"
                                        disabled
                                    />

                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        placeholder="Don't Add to Me!"
                                        disabled
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        defaultValue='Read Me!'
                                        readOnly
                                    />

                                    <Input
                                        className={getClassName(theme, 'hvr dis')}
                                        placeholder="Don't Read Me!"
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </Display >
}

function ToggleDisplay() {

    const iconTypes: ToggleIconType[] = [
        'check',
        'check-dot',
        'check-square',
        'check-x',
        'dot',
        'eye',
        'power',
        'square',
        'sun-moon',
        'thumb-down',
        'thumb-up',
        'toggle',
        'x',
        'x-dot',
        'x-square'
    ]

    return <Display heading='toggles' >
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        Array.from(STYLES).map((n) => {
                            const theme = themes.getBasicStyling(n)

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    {
                                        iconTypes.map((iconType) => {
                                            return <div
                                                key={iconType}
                                                className='row'
                                            >
                                                <Toggle
                                                    className={theme}
                                                    iconType={iconType}
                                                    defaultChecked
                                                />

                                                <Toggle
                                                    iconType={iconType}
                                                    className={theme}
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </Display >
}

function CodeEditorDisplay() {
    return <Display heading='code-editor'>
        <CodeEditor
            id='example_editor'
            className='f-primary'
        />
    </Display>
}

function TextAreaDisplay() {
    return <Display heading='text-editor'>
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        Array.from(STYLES).map((n) => {
                            const theme = themes.getBasicStyling(n)

                            return <TextEditor
                                key={n}
                                className={theme}
                            />
                        })
                    }
                </div>
            })
        }
    </Display>
}

function SliderDisplay() {
    return <Display heading='sliders' >
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        Array.from(STYLES).map((n) => {
                            const theme = themes.getBasicStyling(n)

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                    />

                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                        disabled
                                    />

                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                        disabled
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                        readOnly
                                    />

                                    <Slider
                                        className={getClassName(theme, 'hvr dis')}
                                        readOnly
                                        disabled
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </Display >
}

function FileInputDisplay() {
    return <Display heading='file-input' >
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        Array.from(STYLES).map((n) => {
                            const theme = themes.getBasicStyling(n)

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <FileInput
                                        className={theme}
                                    />

                                    <FileInput
                                        className={theme}
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            })
        }
    </Display >
}

export function Inputs() {
    return <div>
        <InputDisplay />
        <ToggleDisplay />
        <CodeEditorDisplay />
        <TextAreaDisplay />
        <SliderDisplay />
        <FileInputDisplay />
    </div>
}
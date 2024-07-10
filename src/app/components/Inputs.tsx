import { ToggleIconType } from '@lib/components/inputs/toggle/Toggle';
import { Display } from './helpers/formatters';
import { categoryList } from './helpers/test-content';
import { CodeEditor, FileInput, Input, Slider, TextEditor, Toggle, getClassName } from '@lib/main';

function InputDisplay() {
    return <Display heading='inputs' >
        {
            ['', 'i', 'c'].map((mode) => {
                return <div
                    key={mode || 'n'}
                    className='col'
                >
                    {
                        categoryList.map((n) => {
                            let styleType = `f-${n}`;
                            if (mode)
                                styleType += `-${mode}`;

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
                                        defaultValue='Edit Me!'
                                    />

                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
                                        placeholder='Add to Me!'
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
                                        defaultValue="Don't Edit Me!"
                                        disabled
                                    />

                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
                                        placeholder="Don't Add to Me!"
                                        disabled
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
                                        defaultValue='Read Me!'
                                        readOnly
                                    />

                                    <Input
                                        className={getClassName(styleType, 'hvr dis')}
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
                        categoryList.map((n) => {
                            let styleType = `f-${n}`;
                            if (mode)
                                styleType += `-${mode}`;

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
                                                    className={styleType}
                                                    iconType={iconType}
                                                    defaultChecked
                                                />

                                                <Toggle
                                                    iconType={iconType}
                                                    className={styleType}
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
                        categoryList.map((n) => {
                            let styleType = `f-${n}`;
                            if (mode)
                                styleType += `-${mode}`;

                            return <TextEditor
                                key={n}
                                className={styleType}
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
                        categoryList.map((n) => {
                            let styleType = `f-${n}`;
                            if (mode)
                                styleType += `-${mode}`;

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
                                    />

                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
                                        disabled
                                    />

                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
                                        disabled
                                    />
                                </div>

                                <div
                                    className='col'
                                >
                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
                                        readOnly
                                    />

                                    <Slider
                                        className={getClassName(styleType, 'hvr dis')}
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
                        categoryList.map((n) => {
                            let styleType = `f-${n}`;
                            if (mode)
                                styleType += `-${mode}`;

                            return <div
                                key={n}
                                className='row'
                            >
                                <div
                                    className='col'
                                >
                                    <FileInput
                                        className={styleType}
                                    />

                                    <FileInput
                                        className={styleType}
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

export default function Inputs() {
    return <div>
        <InputDisplay />
        <ToggleDisplay />
        <CodeEditorDisplay />
        <TextAreaDisplay />
        <SliderDisplay />
        <FileInputDisplay />
    </div>
}
export type OptionType = string | number | readonly string[] | undefined;

export class SelectOption<T extends OptionType> {
    label: string;
    value: T;

    constructor(label: string, value: T) {
        this.label = label;
        this.value = value;
    }
}
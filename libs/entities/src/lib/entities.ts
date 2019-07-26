export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    order: number;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
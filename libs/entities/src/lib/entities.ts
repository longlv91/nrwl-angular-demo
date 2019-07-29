export class Menu {
    label: string;
    icon: string;
    routerLink: string;
    hasChild: boolean;
    order: number;
    children: Menu[];

    constructor(options: {
        label?: string,
        icon?: string,
        routerLink?: string,
        hasChild?: boolean,
        order?: number,
        children?: Menu[]
    } = {}) {
        this.label = options.label;
        this.icon = options.icon || '';
        this.routerLink = options.routerLink || '';
        this.hasChild = !!options.hasChild;
        this.order = options.order === undefined ? 1 : options.order;
        this.children = options.children || [];
    }
}

export class Menus {
    title: string;
    menu: Menu[];
    constructor(options: {title?: string, menu?: Menu[]}) {
        this.title = options.title;
        this.menu = options.menu;
    }
}

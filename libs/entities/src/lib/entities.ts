import { ApiModelProperty } from '@nestjs/swagger';

export enum Role {
    ADMIN = "ADMIN",
    SUPER_USER = "SUPER_USER",
    NORMAL_USER = "NORMAL_USER"
}
export class Menu {
    label: string;
    keyLang: string;
    icon: string;
    routerLink: string;
    hasChild: boolean;
    order: number;
    permissions: Role[];
    children: Menu[];

    constructor(options: {
        label?: string,
        keyLang?: string,
        icon?: string,
        routerLink?: string,
        hasChild?: boolean,
        order?: number,
        permisions?: Role[],
        children?: Menu[]
    } = {}) {
        this.label = options.label;
        this.keyLang = options.keyLang || '';
        this.icon = options.icon || '';
        this.routerLink = options.routerLink || '';
        this.hasChild = !!options.hasChild;
        this.permissions = options.permisions ? options.permisions : [];
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

export class UserDTO {
    id: string;

    @ApiModelProperty()
    username: string;

    @ApiModelProperty()
    password: string;

    avatar: string;

    role: Role;

    isActivated: boolean;
    constructor(options: {
        id?: string,
        username?: string,
        password?: string,
        avatar?: string,
        role?: Role,
        isActivated?: boolean
    } = {}) {
        this.id = options.id;
        this.username = options.username || '';
        this.password = options.password || '';
        this.avatar = options.avatar || '';
        this.role = options.role;
        this.isActivated = options.isActivated;
    }
}

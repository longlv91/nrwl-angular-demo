import { Role } from '@nrwl-workspace/entities';

export const users = [
    {
        id: "1",
        username: "admin",
        password: "admin",
        avatar: "/assets/images/avatar.png",
        role: Role.ADMIN,
        isActivated: true
    },
    {
        id: "2",
        username: "super_user",
        password: "super_user",
        avatar: "/assets/images/super_user.png",
        role: Role.SUPER_USER,
        isActivated: true
    },
    {
        id: "3",
        username: "normal_user",
        password: "normal_user",
        avatar: "/assets/images/normal_user.png",
        role: Role.NORMAL_USER,
        isActivated: true
    }
]
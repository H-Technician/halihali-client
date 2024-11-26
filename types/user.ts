// 用户信息
export interface UserInfo {
    uid: string,
    nickname: string,
    avatar: Avatar | null,
    mail: string,
    phone: string,
    background: string,
    gender: number,
    description: string,
    exp: number,
    coin: number,
    vip: number,
    auth: number,
    auth_msg: string,
}

export interface Avatar {
    avatar_25: AvatarUrls | null;
    avatar_125: AvatarUrls | null;
    avatar_225: AvatarUrls | null;
}

export interface AvatarUrls {
    png_url: string;
    jpg_url: string;
    webp_url: string;
}
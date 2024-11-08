import { Posts } from "./posts";
import { User } from "./users";

export interface Themes {
    _id:string,
    subscribers: User[],
    posts:Posts[],
    themeName: string,
    userId: User,
    created_at: string,
    updatedAt: string,
}
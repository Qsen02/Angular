import { Posts } from "./posts";
import { Themes } from "./themes";

export interface User {
    _id:string,
    tel: string,
    themes:Themes[],
    posts:Posts[],
    email: string,
    username: string,
    password: string,
    created_at: string,
    updatedAt: string
}
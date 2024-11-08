import { Themes } from "./themes"
import { User } from "./users"

export interface Posts {
    _id: string,
    likes: User[],
    text: string,
    userId: User,
    themeId: Themes,
    created_at: string,
    updatedAt: string
}
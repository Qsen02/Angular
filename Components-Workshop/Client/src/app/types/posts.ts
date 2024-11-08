import { User } from "./users"

export interface Posts {
    _id: string,
    likes: User[],
    text: string,
    userId: User,
    themeId: string,
    created_at: string,
    updatedAt: string
}
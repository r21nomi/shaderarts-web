export interface UserEntity {
    id: string;
    name: string;
}

export interface ArtEntity {
    id: string;
    title: string;
    user_id: string;
    type: number;
    thumb: string;
    src: string;
    description: string;
    star: number;
}
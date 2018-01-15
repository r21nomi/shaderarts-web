export interface UserEntity {
    id: string;
    name: string;
    token: string;
}

export interface ArtEntity {
    id: string;
    title: string;
    type: number;
    thumb: string;
    description: string;
    star: number;
    user: UserEntity;
    codes: CodeEntity[]
}

export interface CodeEntity {
    id: string;
    type: number;
    text: string;
}
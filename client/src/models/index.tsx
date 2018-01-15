export interface UserEntity {
    id: string;
    name: string;
    token: string;
}

export interface ArtEntity {
    id: string;
    title: string;
    type: ArtType;
    thumb: string;
    description: string;
    star: number;
    user: UserEntity;
    codes: CodeEntity[]
}

export interface CodeEntity {
    id: string;
    type: CodeType;
    text: string;
}

export enum ArtType {
    GLSL = 1
}

export enum CodeType {
    VERTEX_SHADER = 1,
    FRAGMENT_SHADER = 2
}
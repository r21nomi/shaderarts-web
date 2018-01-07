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
    programs: ProgramEntity[]
}

export interface ProgramEntity {
    id: string;
    type: number;
    code: string;
}
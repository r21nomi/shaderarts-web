import { ArtType, CodeType } from './';

export interface ArtData {
    title: string;
    type: ArtType;
    description: string;
    thumb: string;
    codes: CodeData[];
    tags: TagData[];
}

export interface CodeData {
    type: CodeType;
    text: string;
    errorLine: number;
}

export interface ArtInfoData {
    title: string;
    description: string;
    tags: TagData[];
}

export interface TagData {
    text: string;
}
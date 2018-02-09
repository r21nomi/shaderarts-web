import { ArtType, CodeType } from './';

export interface ArtData {
    title: string;
    type: ArtType;
    description: string;
    thumb: string;
    codes: CodeData[]
}

export interface CodeData {
    type: CodeType;
    text: string;
}

export interface PostData {
    title: string;
    description: string;
    tags: string[];
}
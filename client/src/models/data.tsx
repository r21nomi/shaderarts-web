import { ArtType, CodeType } from './';

export interface ArtData {
    title: string;
    type: ArtType;
    description: string;
    codes: CodeData[]
}

export interface CodeData {
    type: CodeType;
    text: string;
}
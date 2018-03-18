import { ArtType } from './';
import { ArtData, CodeData, TagData } from './data';

export function toArtData(
    title: string,
    description: string,
    type: ArtType,
    thumb: string,
    codes: CodeData[],
    tags: TagData[]
): ArtData {
    return {
        title: title,
        description: description,
        type: type,
        thumb: thumb,
        codes: codes,
        tags: tags
    };
}
import { CodeState } from '../reducers/code';
import { ArtType, CodeType } from './';
import { ArtData } from './data';

export function toArtData(
    title: string,
    description: string,
    type: ArtType,
    codeState: CodeState
): ArtData {
    return {
        title: title,
        description: description,
        type: type,
        codes: [
            {
                type: CodeType.VERTEX_SHADER,
                text: codeState.vertexShader
            },
            {
                type: CodeType.FRAGMENT_SHADER,
                text: codeState.fragmentShader
            }
        ]
    };
}
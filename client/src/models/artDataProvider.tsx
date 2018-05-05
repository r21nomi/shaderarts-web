import { ArtType, CodeType } from './';
import { ArtData, CodeData, TagData } from './data';

const VERTEX_SHADER_SOURCE =
`attribute vec4 position;
void main() {
    gl_Position = position;
}`;

const FRAGMENT_SHADER_SOURCE =
`precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform sampler2D texture;

void main(void) {
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
	
	gl_FragColor = vec4(uv, 1.0, 1.0);
}`;

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

export function getDefaultArtData(): ArtData {
    return {
        title: '',
        description: '',
        type: ArtType.GLSL,
        thumb: '',
        codes: [
            {
                type: CodeType.VERTEX_SHADER,
                text: VERTEX_SHADER_SOURCE,
                errorLine: -1
            },
            {
                type: CodeType.FRAGMENT_SHADER,
                text: FRAGMENT_SHADER_SOURCE,
                errorLine: -1
            }
        ],
        tags: []
    };
}
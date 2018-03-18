import { UpdateArtDataAction } from "../actions/updateArtData";
import { ArtType, CodeType } from '../models';
import { ArtData } from '../models/data';

const VERTEX_SHADER_SOURCE =
`
attribute vec4 position;
void main() {
    gl_Position = position;
}
`;

const FRAGMENT_SHADER_SOURCE =
`
precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform sampler2D texture;

float map(float value, float beforeMin, float beforeMax, float afterMin, float afterMax) {
	return afterMin + (afterMax - afterMin) * ((value - beforeMin) / (beforeMax - beforeMin));
}

float box(vec2 _st, vec2 _size){
	_size = vec2(0.5) - _size * 0.5;  // Adjust size.
	vec2 uv = step(_size, _st);
	uv *= step(_size, vec2(1.0) - _st);
	return uv.x * uv.y;
}

float exposeInOut(float t) {
	if (t == 0.0) {
		return 0.0;
	
	} else if (t == 1.0) {
		return 1.0;
	
	} else if ((t /= 0.5) < 1.0) {
		return 0.5 * pow(2.0, 10.0 * (t - 1.0));
	
	} else {
		return 0.5 * (-pow(2.0, -10.0 * --t) + 2.0);
	}
}

float ease(float t) {
	return exposeInOut(t);
}

mat2 rotate2d(float _angle){
	return mat2(cos(_angle), -sin(_angle),  sin(_angle), cos(_angle));
}

void main( void ) {
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
	
	uv *= rotate2d(time * 0.2);
	
	vec2 scaledUv = uv * 10.0;
	vec2 repeatedUv = fract(scaledUv);
	
	float len = length(uv);
	float s = sin((time + len) * 10.0);
	float  r = 0.4 * s;
	
	float b = box(repeatedUv, vec2(r));
	vec3 color = vec3(b ,0.0, 0.1);
	
	if (b >= 1.0) {
		float t = map(sin(floor(time * 5.0) + ease(fract(time * 5.0))), -1.0, 1.0, 0.3, 1.0);
		color = vec3(0.5, t * 0.5, t);
	}
	gl_FragColor = vec4(color, 1.0);
}
`;

const initialState: ArtDataState = {
    data: {
        title: '',
        description: '',
        type: ArtType.GLSL,
        thumb: '',
        codes: [
            {
                type: CodeType.VERTEX_SHADER,
                text: VERTEX_SHADER_SOURCE
            },
            {
                type: CodeType.FRAGMENT_SHADER,
                text: FRAGMENT_SHADER_SOURCE
            }
        ],
        tags: []
    }
};

const artData = (state: ArtDataState = initialState, action: UpdateArtDataAction): ArtDataState => {
    switch (action.type) {
        case 'UPDATE_ART_DATA':
            return Object.assign({}, state, {
                artData: action.artData
            });

        case 'UPDATE_ART_DATA_CODE':
            state.data.codes = action.codeData
            return Object.assign({}, state, {
                artData: state
            });

        default:
            return state;
    }
};

export interface ArtDataState {
    data: ArtData
}

export default artData
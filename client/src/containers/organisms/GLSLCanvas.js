import React, { Component } from 'react'
import PropTypes from 'prop-types'

const vertexShaderSource =
`
attribute vec4 position;
void main() {
    gl_Position = position;
}
`

const fragmentShaderSource =
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
`

class GLSLCanvas extends Component {
    constructor() {
        super()
        this.gl
        this.startTime = 0
    }
    componentDidMount() {
        this.gl = this.refs.canvas.getContext("webgl")
        this.startTime = Date.now()
        this.updateCanvas()
    }

    updateCanvas() {
        var gl = this.gl
        if (!gl) {
            console.log("webgl is not available.")
            return
        }

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
        var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
        var program = this.createProgram(gl, vertexShader, fragmentShader)
        gl.useProgram(program)

        // position
        var positionAttributeLocation = gl.getAttribLocation(program, "position")
        var positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        var positions = [
            -1, -1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, 1, 0
        ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
        gl.enableVertexAttribArray(positionAttributeLocation)
        var size = 3  // xyz
        var type = gl.FLOAT
        var normalize = false
        var stride = 0
        var offset = 0
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

        // resolution
        var resolutionLocation = gl.getUniformLocation(program, "resolution")
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)

        // time
        var timeLocation = gl.getUniformLocation(program, "time")
        var time = (Date.now() - this.startTime) / 1000
        gl.uniform1f(timeLocation, time)

        var primitiveType = gl.TRIANGLES
        var vertexCount = 6
        gl.drawArrays(primitiveType, offset, vertexCount)

        this.props.updateCanvas(gl)

        requestAnimationFrame(this.updateCanvas.bind(this))
    }

    createShader(gl, type, source) {
        var shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (!success) {
            console.log(gl.getShaderInfoLog(shader))
            gl.deleteShader(shader)
            return
        }
        return shader
    }

    createProgram(gl, vertexShader, fragmentShader) {
        var program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        var success = gl.getProgramParameter(program, gl.LINK_STATUS)
        if (!success) {
            console.log(gl.getParameterInfoLog(program))
            gl.deleteProgram(program)
            return
        }
        return program
    }

    render() {
        return <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>
    }
}

GLSLCanvas.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    updateCanvas: PropTypes.func.isRequired
}

export default GLSLCanvas
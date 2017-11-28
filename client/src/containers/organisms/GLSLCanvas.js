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

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
    gl_FragColor = vec4(vec3(uv, sin(time)), 1.0);
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
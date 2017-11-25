import React, { Component } from 'react'
import PropTypes from 'prop-types'

const vertexShaderSource = "attribute vec4 a_position; void main() { gl_Position = a_position; }"

const fragmentShaderSource = "precision mediump float; void main() { gl_FragColor = vec4(1, 0, 0.5, 1); }"

class GLSLCanvas extends Component {
    componentDidMount() {
        this.updateCanvas()
    }

    updateCanvas() {
        var gl = this.refs.canvas.getContext("webgl")

        if (!gl) {
            console.log("webgl is not available.")
            return
        }

        var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
        var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

        var program = this.createProgram(gl, vertexShader, fragmentShader)

        var positionAttributeLocation = gl.getAttribLocation(program, "a_position")

        var positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

        var positions = [
            0, 0,
            0, 0.5,
            0.7, 0
        ]
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.useProgram(program)

        gl.enableVertexAttribArray(positionAttributeLocation)

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        var size = 2
        var type = gl.FLOAT
        var normalize = false
        var stride = 0
        var offset = 0
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

        var primitiveType = gl.TRIANGLES
        var count = 3
        gl.drawArrays(primitiveType, offset, count)

        this.props.updateCanvas(gl)
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
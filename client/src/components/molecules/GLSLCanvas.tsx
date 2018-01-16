import * as React from 'react';
import { CodeState } from '../../reducers/code';

interface Props {
    width: number;
    height: number;
    onCanvasUpdated: any;
    codeState: CodeState;
}

class GLSLCanvas extends React.Component<Props, object> {
    gl: any;
    startTime: number;

    getThumb: () => any = () => {
        let canvas: any = this.refs.canvas;
        return canvas.toDataURL('image/png');
    }

    constructor(props: Props) {
        super(props);
        this.startTime = 0;
    }
    componentDidMount() {
        let canvas: any = this.refs.canvas;
        this.gl = canvas.getContext('webgl');
        this.startTime = Date.now();
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.updateCanvas();
    }

    updateCanvas() {
        // Get code from reducer.
        const { codeState } = this.props;

        var gl = this.gl;
        if (!gl) {
            console.log('webgl is not available.');
            return;
        }

        let vertexShaderSource = codeState.vertexShader;
        let fragmentShaderSource = codeState.fragmentShader;
        var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) {
            // Could not compile program.
            return;
        }
        var program = this.createProgram(gl, vertexShader, fragmentShader);
        gl.useProgram(program);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // position
        var positionAttributeLocation = gl.getAttribLocation(program, 'position');
        var positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        var positions = [
            -1, -1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, 1, 0
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(positionAttributeLocation);
        var size = 3;  // xyz
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

        // resolution
        var resolutionLocation = gl.getUniformLocation(program, 'resolution');
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

        // time
        var timeLocation = gl.getUniformLocation(program, 'time');
        var time = (Date.now() - this.startTime) / 1000;
        gl.uniform1f(timeLocation, time);

        var primitiveType = gl.TRIANGLES;
        var vertexCount = 6;
        gl.drawArrays(primitiveType, offset, vertexCount);

        this.props.onCanvasUpdated(gl);
    }

    createShader(gl: any, type: string, source: string) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!success) {
            console.log(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return;
        }
        return shader;
    }

    createProgram(gl: any, vertexShader: string, fragmentShader: string) {
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        var success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!success) {
            console.log(gl.getParameterInfoLog(program));
            gl.deleteProgram(program);
            return;
        }
        return program;
    }

    render() {
        return <canvas ref="canvas" width={this.props.width} height={this.props.height}></canvas>;
    }
}

export default GLSLCanvas;
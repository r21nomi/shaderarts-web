import * as React from 'react';
import './styles/glsl_canvas.css';
import { CodeType } from '../../models';

interface Props {
    width: number;
    height: number;
    onCanvasUpdated: any;
    vertexShader: string;
    fragmentShader: string;
    shouldRender: boolean;
    hasError: boolean;
    onErrorLineUpdated: (errorLine: number, codeType: CodeType) => void;
}

class GLSLCanvas extends React.PureComponent<Props, object> {
    gl: any;
    startTime: number;
    animationTimer: number;
    currentVertexShader: string;
    currentFragmentShader: string;

    createThumb: (size: number) => string = (size: number) => {
        let canvas: any = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        this.gl = canvas.getContext('experimental-webgl', { preserveDrawingBuffer: true });
        this.startTime = Date.now();
        this.updateCanvas();
        return canvas.toDataURL('image/png');
    }

    constructor(props: Props) {
        super(props);
        this.startTime = 0;
    }

    componentDidMount() {
        let canvas: any = this.refs.canvas;
        this.gl = canvas.getContext('experimental-webgl', { preserveDrawingBuffer: true });
        this.startTime = Date.now();
        this.animate();
    }

    componentWillUnmount() {
        this.stopAnimate();
    }

    animate() {
        this.animationTimer = requestAnimationFrame(this.animate.bind(this));
        this.updateCanvas();
    }

    stopAnimate() {
        if (this.animationTimer) {
            cancelAnimationFrame(this.animationTimer);
        }
    }

    updateCanvas() {
        let gl = this.gl;
        if (!gl) {
            console.log('webgl is not available.');
            return;
        }

        let vertexShaderSource = this.props.vertexShader;
        let fragmentShaderSource = this.props.fragmentShader;
        let vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        let fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        if (!vertexShader || !fragmentShader) {
            // Could not compile program.
        } else {
            this.currentVertexShader = vertexShader;
            this.currentFragmentShader = fragmentShader;
        }

        let program = this.createProgram(gl, this.currentVertexShader, this.currentFragmentShader);
        gl.useProgram(program);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        let positions = [
            -1, -1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, 1, 0
        ];

        let index = [
            0, 1, 2,
            1, 2, 3
        ];

        // position
        let vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        let positionAttributeLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionAttributeLocation);

        let size = 3;  // xyz
        let type = gl.FLOAT;
        let normalize = false;
        let stride = 0;
        let offset = 0;
        gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

        let ibo = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(index), gl.STATIC_DRAW);

        // resolution
        let resolutionLocation = gl.getUniformLocation(program, 'resolution');
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

        // time
        let timeLocation = gl.getUniformLocation(program, 'time');
        let time = (Date.now() - this.startTime) / 1000;
        gl.uniform1f(timeLocation, time);

        let primitiveType = gl.TRIANGLES;
        let vertexCount = index.length;
        gl.drawElements(primitiveType, vertexCount, gl.UNSIGNED_SHORT, 0);
        gl.flush();

        this.props.onCanvasUpdated(gl);
    }

    createShader(gl: any, type: string, source: string): any {
        let shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!success) {
            console.log(gl.getShaderInfoLog(shader));

            let errorLog = gl.getShaderInfoLog(shader);
            errorLog = errorLog.replace('ERROR: 0:', '');
            errorLog = errorLog.slice(0, errorLog.indexOf(':'));

            let errorLine = parseInt(errorLog, 10);

            if (type == gl.FRAGMENT_SHADER) {
                this.props.onErrorLineUpdated(errorLine, CodeType.FRAGMENT_SHADER);
            }

            gl.deleteShader(shader);
            return null;
        }

        if (this.props.hasError) {
            if (type == gl.FRAGMENT_SHADER) {
                this.props.onErrorLineUpdated(-1, CodeType.FRAGMENT_SHADER);
            }
        }

        return shader;
    }

    createProgram(gl: any, vertexShader: string, fragmentShader: string) {
        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        let success = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!success) {
            console.log(gl.getParameterInfoLog(program));
            gl.deleteProgram(program);
            return;
        }
        return program;
    }

    render() {
        return <div className="GLSLCanvas-canvas">
                    <canvas
                        ref="canvas"
                        width={this.props.width}
                        height={this.props.height} />
                </div>;
    }
}

export default GLSLCanvas;
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import { WindowSizeState } from '../../reducers/windowSize';
import { CodeState } from '../../reducers/code';
import 'codemirror/mode/clike/clike';
import './styles/shader_editor.css';
import 'codemirror/theme/monokai.css';

interface Props {
    onCodeUpdated: any;
    windowSizeState: WindowSizeState;
    codeSate: CodeState;
}

class ShaderEditor extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

    codeMirror: Element;

    componentDidMount() {
        this.codeMirror = document.getElementsByClassName('CodeMirror')[0];
        setHeight(this.codeMirror, this.props.windowSizeState.height);
    }

	updateCode(newCode: string) {
        const { onCodeUpdated } = this.props;
        
        onCodeUpdated(newCode);
    }
    
	render() {
        const { windowSizeState, codeSate } = this.props;

        if (this.codeMirror) {
            setHeight(this.codeMirror, windowSizeState.height);
        }

		let options = {
            readOnly: false,
            lineNumbers: true,
            mode: 'x-shader/x-fragment',
            theme: 'monokai',
            indentUnit: 4
		};
        return <CodeMirror
                className="ShaderEditor-content"
                value={codeSate.fragmentShader}
                onChange={this.updateCode.bind(this)}
                options={options} />;
	}
}

function setHeight(codeMirror: Element, height: number) {
    codeMirror.setAttribute('style', `height:${height - 100}px`);
}

export default ShaderEditor;
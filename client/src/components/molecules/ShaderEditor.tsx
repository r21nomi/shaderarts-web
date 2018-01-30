import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import { CodeState } from '../../reducers/code';
import 'codemirror/mode/clike/clike';
import './styles/shader_editor.css';
import 'codemirror/theme/monokai.css';

interface Props {
    onCodeUpdated: any;
    code: CodeState;
}

class ShaderEditor extends React.Component<Props, object> {
    constructor(props: Props) {
        super(props);
    }

	updateCode(newCode: string) {
        const { onCodeUpdated } = this.props;
        
        onCodeUpdated(newCode);
	}
	render() {
        const { code } = this.props;
		let options = {
            readOnly: false,
            lineNumbers: true,
            mode: 'x-shader/x-fragment',
            theme: 'monokai',
            indentUnit: 4
		};
        return <CodeMirror
            className="ShaderEditor-content"
            value={code.fragmentShader}
            onChange={this.updateCode.bind(this)}
            options={options} />;
	}
}

export default ShaderEditor;
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import { CodeState } from '../../reducers/code'

interface Props {
    onCodeUpdated: any;
    code: CodeState;
}

class ShaderEditor extends React.Component<Props, object> {
    state: any;

    constructor(props: Props) {
        super(props);
        const { code } = this.props;

        this.state = {
            readOnly: false,
            code: code.fragmentShader
        };
    }
	updateCode(newCode: string) {
        const { onCodeUpdated } = this.props;
        
        this.setState({
			code: newCode
        });
        
        onCodeUpdated(newCode);
	}
	render() {
		var options = {
            lineNumbers: true,
            mode: this.state.mode
		};
		return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />;
	}
}

export default ShaderEditor;
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import { WindowSizeState } from '../../reducers/windowSize';
import { CodeData } from '../../models/data';
import { ArtDataState } from '../../reducers/artData';
import 'codemirror/mode/clike/clike';
import './styles/shader_editor.css';
import 'codemirror/theme/monokai.css';

interface Props {
    onCodeUpdated: (codeData: CodeData[]) => void;
    windowSizeState: WindowSizeState;
    artData: ArtDataState;
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
        const { onCodeUpdated, artData } = this.props;
        let codes = artData.data.codes;
        let codeData = [
            {
                type: codes[0].type,
                text: codes[0].text,
                errorLine: codes[0].errorLine
            },
            {
                type: codes[1].type,
                text: newCode,
                errorLine: codes[1].errorLine
            }
        ];
        onCodeUpdated(codeData);
    }
    
	render() {
        const { windowSizeState, artData } = this.props;

        let errorLine = artData.data.codes[1].errorLine;
        toggleHighlightForErrorLine(errorLine);

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

        let fragmentShader = artData.data.codes[1].text;
        
        return <CodeMirror
                className="ShaderEditor-content"
                value={fragmentShader}
                onChange={this.updateCode.bind(this)}
                options={options} />;
	}
}

function setHeight(codeMirror: Element, height: number) {
    codeMirror.setAttribute('style', `height:${height - 100}px`);
}

function toggleHighlightForErrorLine(errorLine: number) {
    let errorLineClassName = 'errorLine';

    if (errorLine > 0) {
        let liens = document.getElementsByClassName('CodeMirror-line');
        liens[errorLine - 1].classList.add(errorLineClassName);
    } else {
        let lines = document.getElementsByClassName(errorLineClassName);
        for (var i = 0; i < lines.length; i++) {
            lines[i].classList.remove(errorLineClassName);
        }
    }
}

export default ShaderEditor;
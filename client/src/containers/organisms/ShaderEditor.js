import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import styles from 'codemirror/lib/codemirror.css'

class ShaderEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readOnly: false,
            code: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
            mode: 'markdown'
        }
    }
	updateCode(newCode) {
		this.setState({
			code: newCode
		})
	}
	render() {
		var options = {
            lineNumbers: true,
            mode: this.state.mode
		}
		return <CodeMirror className={styles.CodeMirror} value={this.state.code} onChange={this.updateCode} options={options} />
	}
}

export default ShaderEditor
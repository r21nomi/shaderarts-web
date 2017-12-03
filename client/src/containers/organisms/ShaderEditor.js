import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'

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
		return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
	}
}

export default ShaderEditor
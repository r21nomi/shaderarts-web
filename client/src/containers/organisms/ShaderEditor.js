import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import PropTypes from 'prop-types'

class ShaderEditor extends Component {
    constructor(props) {
        super(props);
        const { code } = this.props

        this.state = {
            readOnly: false,
            code: code.fragmentShader
        }
    }
	updateCode(newCode) {
        const { onCodeUpdated } = this.props
        
		this.setState({
			code: newCode
        })
        
        onCodeUpdated(newCode)
	}
	render() {
		var options = {
            lineNumbers: true,
            mode: this.state.mode
		}
		return <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} />
	}
}

ShaderEditor.propTypes = {
    onCodeUpdated: PropTypes.func.isRequired
}

export default ShaderEditor
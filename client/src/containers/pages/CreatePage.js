import React from 'react'
import ShaderEditor from '../organisms/ShaderEditor'
import CreateHeader from '../organisms/CreateHeader'
import GLSLCanvas from '../organisms/GLSLCanvas'
import styles from '../../styles/create_page.css'

const canvasProps = {
    width: 500,
    height: 500,
    updateCanvas: (gl) => {
        console.log("update canvas")
    }
}

const CreatePage = () => (
    <div>
        <CreateHeader />
        <div className={styles.content}>
            <ShaderEditor />
            <GLSLCanvas {...canvasProps} />
        </div>
    </div>
)

export default CreatePage
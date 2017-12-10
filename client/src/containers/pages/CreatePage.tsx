import * as React from 'react';
import UpdateCode from '../UpdateCode';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import CreateHeader from '../organisms/CreateHeader';
import '../../styles/create_page.css';

const canvasProps = {
    width: 500,
    height: 500,
    onCanvasUpdated: (gl: any) => {
        // no-op
    }
};

const CreatePage = () => (
    <div>
        <CreateHeader />
        <div className="CreatePage-content">
            <UpdateCode />
            <UpdateGLSLCanvas {...canvasProps} />
        </div>
    </div>
);

export default CreatePage;
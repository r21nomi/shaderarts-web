import * as React from 'react';
import { ArtsState } from '../../reducers/arts';
import './styles/artList.css';
import UpdateGLSLCanvas from '../UpdateGLSLCanvas';
import {WindowSizeState} from '../../reducers/windowSize';

interface Props {
    arts: ArtsState;
    onFetch: () => void;
    windowSizeState: WindowSizeState;
}

class CarouselArts extends React.Component<Props, object> {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        const { arts, windowSizeState } = this.props;

        let art = arts.items.length === 0 ? null : arts.items[0];

        if (!art || arts.isLoading) {
            return null;
        } else {
            return <div className="CarouselArts">
                <UpdateGLSLCanvas
                    width={windowSizeState.width}
                    height={windowSizeState.height}
                    onCanvasUpdated={(gl: any) => {
                        // no-op
                    }}
                    vertexShader={art.codes[0].text}
                    fragmentShader={art.codes[1].text}
                    shouldRender={true}
                    hasError={false}
                />
            </div>;
        }
    }
}

export default CarouselArts;
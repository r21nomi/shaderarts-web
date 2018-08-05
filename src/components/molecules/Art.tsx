import * as React from 'react';
import ArtInfo from '../atoms/ArtInfo';
import { ArtEntity } from '../../models';
import './styles/art.css';
import UpdateGLSLCanvas from '../../containers/UpdateGLSLCanvas';

interface Props {
    art: ArtEntity;
    isMyPage: boolean;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
    onPushArt: (artId: string) => void;
}

class Art extends React.Component<Props, object> {
    isMouseOver: boolean;

    componentDidMount() {
        this.isMouseOver = false;
    }

    render() {
        const { art, isMyPage, onToggleStar, onPushArt } = this.props;

        return <div className="Art">
            <div className="Art-thumb"
                 onClick={() => {
                     onPushArt(art.id)
                 }}
                  onMouseOver={() => {
                      this.isMouseOver = true;
                      this.forceUpdate();
                  }}
                  onMouseLeave={() => {
                      this.isMouseOver = false;
                      this.forceUpdate();
                  }}>
                <img ref="artThumb" src={art.thumb} alt={art.title}/>
                {(() => {
                    if (this.isMouseOver) {
                        let artThumb: any = this.refs.artThumb;
                        return <div className="Art-preview">
                            <UpdateGLSLCanvas
                                width={artThumb.width}
                                height={artThumb.height}
                                onCanvasUpdated={(gl: any) => {
                                    // no-op
                                }}
                                vertexShader={art.codes[0].text}
                                fragmentShader={art.codes[1].text}
                                shouldRender={true}
                                hasError={false}
                            />
                        </div>;
                    } else {
                        return null;
                    }
                })()}
            </div>
            <ArtInfo
                art={art}
                isMyPage={isMyPage}
                onToggleStar={onToggleStar}
                onPushArt={onPushArt}
            />
        </div>;
    }
}

export default Art;
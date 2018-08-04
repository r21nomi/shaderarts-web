import * as React from 'react';
import Art from '../../components/molecules/Art';
import { ArtsState } from '../../reducers/arts';
import './styles/artList.css';
import Spinner from '../../components/atoms/Spinner';

interface Props {
    arts: ArtsState;
    isMyPage: boolean;
    onFetch: () => void;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
    onPushArt: (artId: string) => void;
}

class ArtList extends React.Component<Props, object> {
    componentWillMount() {
        this.props.onFetch();
    }

    render() {
        const { arts, isMyPage, onToggleStar, onPushArt } = this.props;

        if (arts.isLoading) {
            return <Spinner />;
        } else {
            return <div className="ArtList">
                        {arts.items.map(art =>
                            <Art
                                key={art.id}
                                art={art}
                                isMyPage={isMyPage}
                                onToggleStar={onToggleStar}
                                onPushArt={onPushArt}
                            />
                        )}
                    </div>;
        }
    }
}

export default ArtList;
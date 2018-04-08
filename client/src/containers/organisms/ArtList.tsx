import * as React from 'react';
import Art from '../../components/molecules/Art';
import { ArtsState } from '../../reducers/arts';
import { UserState } from '../../reducers/user';
import './styles/artList.css';

interface Props {
    arts: ArtsState;
    isMyPage: boolean;
    userState: UserState;
    onFetch: () => void;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
}

class ArtList extends React.Component<Props, object> {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        const { arts, isMyPage, onToggleStar } = this.props;

        return <div className="ArtList">
            {arts.items.map(art =>
                <Art
                    key={art.id}
                    art={art}
                    isMyPage={isMyPage}
                    onToggleStar={onToggleStar}
                />
            )}
        </div>;
    }
}

export default ArtList;
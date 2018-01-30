import * as React from 'react';
import Art from '../../components/molecules/Art';
import { ArtsState } from '../../reducers/arts';
import { UserState } from '../../reducers/user';
import { UserEntity } from '../../models/index';
import './styles/artList.css';

interface Props {
    arts: ArtsState;
    userState: UserState;
    onFetch: (userEntity: UserEntity) => void;
    onArtClick: (id: string) => void;
}

class ArtList extends React.Component<Props, object> {
    componentDidMount() {
        this.props.onFetch(this.props.userState.user);
    }

    render() {
        const { arts, onArtClick } = this.props;
        return <div className="ArtList">
            {arts.items.map(art =>
                <Art
                    key={art.id}
                    art={art}
                    onArtClick={() => onArtClick(art.id)}
                />
            )}
        </div>;
    }
}

export default ArtList;
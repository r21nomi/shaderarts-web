import * as React from 'react';
import Art from '../../components/molecules/Art';
import { ArtsState } from '../../reducers/arts';
import { UserState } from '../../reducers/user';
import './styles/artList.css';

interface Props {
    arts: ArtsState;
    userState: UserState;
    onFetch: () => void;
    onStar: (artId: String) => void;
}

class ArtList extends React.Component<Props, object> {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        const { arts, onStar } = this.props;
        return <div className="ArtList">
            {arts.items.map(art =>
                <Art
                    key={art.id}
                    art={art}
                    onStar={onStar}
                />
            )}
        </div>;
    }
}

export default ArtList;
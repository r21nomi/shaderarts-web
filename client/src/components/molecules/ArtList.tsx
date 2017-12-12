import * as React from 'react';
import Art from '../atoms/Art';
import { ArtsState } from '../../reducers/arts';

interface Props {
    arts: ArtsState;
    onFetch: any;
    onArtClick: any;
}

class ArtList extends React.Component<Props, object> {
    componentDidMount() {
        this.props.onFetch();
    }

    render() {
        const { arts, onArtClick } = this.props;
        return <div>
            {arts.items.map(art =>
                <Art
                    key={art.id}
                    {...art}
                    onClick={() => onArtClick(art.id)}
                />
            )}
        </div>
    }
}

export default ArtList;
import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../organisms/Header';
import { RootState } from '../../reducers/index';
import './styles/page.css';

interface Props {
    match: {
        params: {
            id: number
        }
    }
}

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class ArtDetailPage extends React.Component<Props, object> {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <div className="Page-content ArtDetailPage-content">
                    ArtDetailPage: {this.props.match.params.id}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtDetailPage);
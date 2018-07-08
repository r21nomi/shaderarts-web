import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/index';
import Header from '../organisms/Header';
import Arts from '../Arts';
import './styles/page.css';
import './styles/top_page.css';

interface Props {}

const mapStateToProps = (state: RootState) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    // no-op
});

class TopPage extends React.Component<Props, object> {
    render() {
        return <div>
                    <Header />
                    <div className="Page-content TopPage-content">
                        <Arts />
                    </div>
                </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopPage);
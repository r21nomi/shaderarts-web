import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/actionCreator';
import Link from '../components/atoms/Link';

const mapStateToProps = (state: any, ownProps: any) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
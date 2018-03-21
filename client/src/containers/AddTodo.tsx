import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreator';
import AddTodoForm from '../components/molecules/AddTodoForm';

const mapStateToProps = (state: any) => ({
    // no-op
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    onClick: (value: any) => {
        dispatch(addTodo(value));
    }
});

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);

export default AddTodo;
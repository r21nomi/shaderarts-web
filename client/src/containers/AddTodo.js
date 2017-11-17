import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => ({
    // no-op
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (value) => {
        dispatch(addTodo(value))
    }
})

const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm)

export default AddTodo
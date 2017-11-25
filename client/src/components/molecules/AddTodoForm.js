import React from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ onClick }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                onClick(input.value)
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodoForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default AddTodoForm
import * as React from 'react';

interface Props {
    onClick: any;
}

const AddTodoForm = ({ onClick }: Props) => {
    let input: any;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                onClick(input.value);
                input.value = '';
            }}>
                <input ref={node => {
                    input = node;
                }} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodoForm;
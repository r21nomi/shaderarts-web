let nextToDoId = 0;

export interface CodeAction {
    type: string;
    code: string;
}

export const addTodo = (text: string) => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
});

export const setVisibilityFilter = (filter: any) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id: any) => ({
    type: 'TOGGLE_TODO',
    id
});

export const updateCode = (code: string): CodeAction => ({
    type: 'UPDATE_CODE',
    code
});

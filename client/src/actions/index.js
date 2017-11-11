let nextToDoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
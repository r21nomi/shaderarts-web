import { ArtEntity } from '../models/';

let nextToDoId = 0;

export interface CodeAction {
    type: string;
    code: string;
}

export interface FetchArtsAction {
    type: string;
    arts: ArtEntity[];
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

export function fetchArts() {
    return (dispatch: any) => {
        dispatch(requestArts());
        return fetch('http://ec2-52-199-201-116.ap-northeast-1.compute.amazonaws.com/v1/art')
        // return fetch('http://localhost:9000/v1/art')
            .then(response => response.json())
            .then(json => dispatch(receiveArts(json)));
    };
}

function requestArts(): FetchArtsAction {
    return {
        type: 'REQUEST_ARTS',
        arts: []
    };
}

function receiveArts(json: ArtEntity[]): FetchArtsAction {
    return {
        type: 'RECEIVE_ARTS',
        arts: json
    };
}
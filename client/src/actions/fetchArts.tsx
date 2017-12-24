import { ArtEntity } from '../models/';

export interface FetchArtsAction {
    type: string;
    arts: ArtEntity[];
}

export function fetchArts() {
    let header = new Headers();

    var option = {
        method: 'GET',
        headers: header
    };
    return (dispatch: any) => {
        dispatch(requestArts());
        return fetch('http://ec2-52-199-201-116.ap-northeast-1.compute.amazonaws.com/v1/art', option)
        // return fetch('http://localhost:9000/v1/art', option)
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
    console.log(json);
    return {
        type: 'RECEIVE_ARTS',
        arts: json
    };
}
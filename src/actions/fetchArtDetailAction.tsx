import { ArtEntity } from '../models/';

export interface FetchArtDetailAction {
    type: string;
    art: ArtEntity;
}
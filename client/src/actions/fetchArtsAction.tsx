import { ArtEntity } from '../models/';

export interface FetchArtsAction {
    type: string;
    arts: ArtEntity[];
}
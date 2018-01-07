import * as React from 'react';
import { ArtEntity } from '../../models';

interface Props {
    art: ArtEntity;
    onArtClick: (id: string) => void;
}

const Art = ({ art, onArtClick }: Props) => (
    <div
        onClick={() => onArtClick(art.id)}
    >
        <ul>
            <li>{art.title}</li>
            <li>{art.description}</li>
            <li>☆{art.star}</li>
            <li>created by {art.user.name}</li>
            <li>programs: {art.programs.length}</li>
        </ul>
    </div>
);

export default Art;
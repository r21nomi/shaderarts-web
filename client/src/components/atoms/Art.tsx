import * as React from 'react';
import { ArtEntity } from '../../models';
import './styles/art.css';

interface Props {
    art: ArtEntity;
    onArtClick: (id: string) => void;
}

const Art = ({ art, onArtClick }: Props) => (
    <div
        onClick={() => onArtClick(art.id)}
    >
        <ul>
            <li className="Art-title">{art.title}</li>
            <li className="Art-description">{art.description}</li>
            <li>☆{art.star}</li>
            <li>created by {art.user.name}</li>
            <li>
                {art.codes.map(code =>
                    <div key={code.id}>
                        <div>code type: {code.type.toString()}</div>
                        <div className="Art-code">{code.text}</div>
                    </div>
                )}
            </li>
        </ul>
    </div>
);

export default Art;
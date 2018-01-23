import * as React from 'react';
import { ArtEntity, ArtType, CodeType } from '../../models';
import './styles/art.css';

interface Props {
    art: ArtEntity;
    onArtClick: (id: string) => void;
}

const Art = ({ art, onArtClick }: Props) => (
    <div
        onClick={() => onArtClick(art.id)}
    >
        <div className="Art-thumb"><img src={art.thumb} alt={art.title}/></div>
        <ul>
            <li><img src={art.user.thumb} alt={art.user.name}/></li>
            <li>{art.user.name}</li>
            <li>{ArtType.getName(art.type)}</li>
            <li>☆{art.star}</li>
            <li>
                {art.codes.map(code =>
                    <div key={code.id}>
                        <div>{CodeType.getName(code.type)}</div>
                        <div className="Art-code">{code.text}</div>
                    </div>
                )}
            </li>
        </ul>
    </div>
);

export default Art;
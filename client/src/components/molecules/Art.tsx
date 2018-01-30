import * as React from 'react';
import { Link } from 'react-router-dom';
import ArtInfo from '../atoms/ArtInfo';
import { ArtEntity } from '../../models';
import './styles/art.css';

interface Props {
    art: ArtEntity;
    onArtClick: (id: string) => void;
}

const Art = ({ art, onArtClick }: Props) => (
    <div className="Art">
        <Link className="Art-thumb" to={`/art/${art.id}`}>
            <img src={art.thumb} alt={art.title}/>
        </Link>
        <ArtInfo art={art} />
    </div>
);

export default Art;
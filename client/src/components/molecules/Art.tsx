import * as React from 'react';
import { Link } from 'react-router-dom';
import ArtInfo from '../atoms/ArtInfo';
import { ArtEntity } from '../../models';
import './styles/art.css';

interface Props {
    art: ArtEntity;
    onStar: (artId: String) => void;
}

const Art = ({ art, onStar }: Props) => (
    <div className="Art">
        <Link className="Art-thumb" to={`/art/${art.id}`}>
            <img src={art.thumb} alt={art.title}/>
        </Link>
        <ArtInfo
            art={art}
            onStar={onStar}
        />
    </div>
);

export default Art;
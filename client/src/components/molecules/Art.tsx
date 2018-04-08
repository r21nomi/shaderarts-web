import * as React from 'react';
import { Link } from 'react-router-dom';
import ArtInfo from '../atoms/ArtInfo';
import { ArtEntity } from '../../models';
import './styles/art.css';

interface Props {
    art: ArtEntity;
    isMyPage: boolean;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
}

const Art = ({ art, isMyPage, onToggleStar }: Props) => (
    <div className="Art">
        <Link className="Art-thumb" to={`/art/${art.id}`}>
            <img src={art.thumb} alt={art.title}/>
        </Link>
        <ArtInfo
            art={art}
            isMyPage={isMyPage}
            onToggleStar={onToggleStar}
        />
    </div>
);

export default Art;
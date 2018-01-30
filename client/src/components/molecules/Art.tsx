import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArtEntity, ArtType, CodeType } from '../../models';
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
        <ul className="Art-info">
            <li className="Art-userThumb">
                <a href="javascript:void(0)"
                    onClick={() => console.log('Art-userThumb')}
                >
                    <img src={art.user.thumb} alt={art.user.name}/>
                </a>
            </li>
            <li className="Art-userName">
                <a href="javascript:void(0)"
                    onClick={() => console.log('Art-userName')}
                >
                    {art.user.name}
                </a>
            </li>
            <li className="Art-star">
                <a href="javascript:void(0)"
                    onClick={() => console.log('Art-stat')}
                >
                    ☆{art.star}
                </a>
            </li>
        </ul>
        <ul className="Art-tags">
            <li className="Art-tag">
                <a href="javascript:void(0)"
                    onClick={() => console.log('Art-tag')}
                >
                    #{ArtType.getName(art.type)}
                </a>
            </li>
        </ul>
        <div>
            {art.codes.map(code =>
                <div key={code.id}>
                    <div>{CodeType.getName(code.type)}</div>
                    <div className="Art-code">{code.text}</div>
                </div>
            )}
        </div>
    </div>
);

export default Art;
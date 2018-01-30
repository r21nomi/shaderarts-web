import * as React from 'react';
import { ArtEntity, ArtType, CodeType } from '../../models';
import './styles/artInfo.css';

interface Props {
    art: ArtEntity;
}

const ArtInfo = ({ art }: Props) => (
    <div className="ArtInfo">
        <ul className="ArtInfo-info">
            <li className="ArtInfo-userThumb">
                <a href="javascript:void(0)"
                    onClick={() => console.log('ArtInfo-userThumb')}
                >
                    <img src={art.user.thumb} alt={art.user.name}/>
                </a>
            </li>
            <li className="ArtInfo-userName">
                <a href="javascript:void(0)"
                    onClick={() => console.log('ArtInfo-userName')}
                >
                    {art.user.name}
                </a>
            </li>
            <li className="ArtInfo-star">
                <a href="javascript:void(0)"
                    onClick={() => console.log('ArtInfo-stat')}
                >
                    ☆{art.star}
                </a>
            </li>
        </ul>
        <ul className="ArtInfo-tags">
            <li className="ArtInfo-tag">
                <a href="javascript:void(0)"
                    onClick={() => console.log('ArtInfo-tag')}
                >
                    #{ArtType.getName(art.type)}
                </a>
            </li>
        </ul>
        <div>
            {art.codes.map(code =>
                <div key={code.id}>
                    <div>{CodeType.getName(code.type)}</div>
                    <div className="ArtInfo-code">{code.text}</div>
                </div>
            )}
        </div>
    </div>
);

export default ArtInfo;
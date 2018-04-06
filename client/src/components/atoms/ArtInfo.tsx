import * as React from 'react';
import { ArtEntity, CodeType } from '../../models';
import './styles/artInfo.css';

interface Props {
    art: ArtEntity;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
}

const ArtInfo = ({ art, onToggleStar }: Props) => (
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
                    onClick={() => onToggleStar(art.id, art.isStarred)}
                >
                    {(() => {
                        if (art.isStarred) {
                            return <div>★{art.star}</div>;
                        } else {
                            return <div>☆{art.star}</div>;
                        }
                    })()}
                </a>
            </li>
        </ul>
        <ul className="ArtInfo-tags">
            {art.tags.map(tag =>
                <li className="ArtInfo-tag"
                    key={tag.id}
                >
                    <a href="javascript:void(0)"
                        onClick={() => console.log(tag.text)}
                    >
                        #{tag.text}
                    </a>
                </li>
            )}
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
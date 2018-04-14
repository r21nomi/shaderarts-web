import * as React from 'react';
import { ArtEntity, CodeType } from '../../models';
import { Link } from 'react-router-dom';
import './styles/artInfo.css';

interface Props {
    art: ArtEntity;
    isMyPage: boolean;
    onToggleStar: (artId: String, isStarCurrent: boolean) => void;
}

const ArtInfo = ({ art, isMyPage, onToggleStar }: Props) => (
    <div className="ArtInfo">
        {(() => {
            if (!isMyPage) {
                return <ul className="ArtInfo-info">
                    <li className="ArtInfo-userThumb">
                        <Link className="Art-thumb" to={`/user/${art.user.id}`}>
                            <img src={art.user.thumb} alt={art.user.name}/>
                        </Link>
                    </li>
                    <li className="ArtInfo-userName">
                        <Link className="Art-thumb" to={`/user/${art.user.id}`}>
                            {art.user.name}
                        </Link>
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
                </ul>;
            } else {
                return null;
            }
        })()}
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
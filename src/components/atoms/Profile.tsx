import * as React from 'react';
import { UserEntity } from '../../models/index';
import './styles/profile.css';

interface Props {
    userEntity: UserEntity;
}

const Profile = ({ userEntity }: Props) => (
    <div className="Profile">
        <div>
            <a className="Profile-thumb" href="javascript:void(0)">
                <img src={userEntity.thumb} alt={userEntity.name}/>
            </a>
        </div>
        <ul className="Profile-infoArea">
            <li className="Profile-userName">{userEntity.name}</li>
        </ul>
    </div>
);

export default Profile;
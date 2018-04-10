import * as React from 'react';
import { UserState } from '../../reducers/user';
import './styles/profile.css';

interface Props {
    userState: UserState;
}

const Profile = ({ userState }: Props) => (
    <div className="Profile">
        <div>
            <a className="Profile-thumb" href="javascript:void(0)">
                <img src={userState.user.thumb} alt={userState.user.name}/>
            </a>
        </div>
        <ul className="Profile-infoArea">
            <li className="Profile-userName">{userState.user.name}</li>
        </ul>
    </div>
);

export default Profile;
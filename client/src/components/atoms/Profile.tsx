import * as React from 'react';
import { MyProfileState } from '../../reducers/myProfile';
import './styles/profile.css';

interface Props {
    MyProfileState: MyProfileState;
}

const Profile = ({ MyProfileState }: Props) => (
    <div className="Profile">
        <div>
            <a className="Profile-thumb" href="javascript:void(0)">
                <img src={MyProfileState.user.thumb} alt={MyProfileState.user.name}/>
            </a>
        </div>
        <ul className="Profile-infoArea">
            <li className="Profile-userName">{MyProfileState.user.name}</li>
        </ul>
    </div>
);

export default Profile;
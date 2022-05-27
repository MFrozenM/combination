import React from 'react';
import classes from './avatar.module.css'
import {UserState, useUserDataStore} from "../store/apiDataStore";
import {ReactComponent as PhoneIcon} from "../../../assets/icons/user.svg";

type avatarType = string | undefined

const Avatar = () => {
    const userAvatar = useUserDataStore<avatarType>((state: UserState) => state.userData?.picture?.large)

    return (
        userAvatar ?
            <img alt={"avatar"} src={userAvatar} className={classes.container}/> :
            <div className={classes.icon_wrapper}>
                <PhoneIcon className={classes.icon}/>
            </div>
    );
};

export default Avatar;

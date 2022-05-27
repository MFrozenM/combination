import React from 'react';
import classes from './infos-buttons.module.css'
import ReactiveButton from "./reactive-button";
import {ReactComponent as EmailIcon} from "../../../assets/icons/email.svg";
import {ReactComponent as NationalityIcon} from "../../../assets/icons/earth.svg";
import {ReactComponent as AddressIcon} from "../../../assets/icons/address.svg";
import {ReactComponent as PhoneIcon} from "../../../assets/icons/phone.svg";
import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg";

interface InfosButtonsProps {
    active: number
    setActive: React.Dispatch<React.SetStateAction<number>>
}

const InfosButtons = ({active, setActive}: InfosButtonsProps) => {

    return (
        <div data-testid="info-buttons" className={classes.container}>

            <ReactiveButton index={0} Icon={EmailIcon} active={active === 0} setActive={setActive}/>
            <ReactiveButton index={1} Icon={NationalityIcon} active={active === 1} setActive={setActive}/>
            <ReactiveButton index={2} Icon={UserIcon} active={active === 2} setActive={setActive}/>
            <ReactiveButton index={3} Icon={AddressIcon} active={active === 3} setActive={setActive}/>
            <ReactiveButton index={4} Icon={PhoneIcon} active={active === 4} setActive={setActive}/>

        </div>
    );
};

export default InfosButtons;

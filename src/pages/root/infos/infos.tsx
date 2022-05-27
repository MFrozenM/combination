import React, {useState} from 'react';
import classes from './infos.module.css'
import InfosButtons from "./infos-buttons";
import {UserState, useUserDataStore} from "../store/apiDataStore";
import {Location, Name, Result} from "../../../apis/models/user.model";

const UserExtraction: { [key: number]: string } = {
    0: "email",
    1: "nat",
    2: "name",
    3: "location",
    4: "phone",
}

const getExtractedUserData = (data: Result | null | undefined, activeIndex: number): string => {
    // On initial the data is undefined (before getting response from the server)
    if (data === undefined) {
        return ""
    }

    // @ts-ignore
    const extracted: Name | Location | string  = data[UserExtraction[activeIndex]]

    if ((extracted as Name).first) {
        return `${(extracted as Name).title}. ${(extracted as Name).first} ${(extracted as Name).last}`
    }

    if ((extracted as Location).state) {
        return `${(extracted as Location).city} ${(extracted as Location).state} ${(extracted as Location).postcode}`
    }

    return String(extracted)
};

const Infos = () => {
    const userData = useUserDataStore((state: UserState) => state.userData)
    const [active, setActive] = useState(0);

    return (
        <div className={classes.container}>

            <div className={classes.info_text_wrapper}>
                <span data-testid="info-text" className={classes.info_value}>{getExtractedUserData(userData, active)}</span>
            </div>

            <InfosButtons active={active} setActive={setActive}/>

        </div>
    );
};

export default Infos;

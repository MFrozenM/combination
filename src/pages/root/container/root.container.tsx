import React, {useEffect} from 'react';
import classes from './root.module.css'
import Box from "../box/box";
import {UserState, useUserDataStore} from "../store/apiDataStore";
import {UserRootObject} from "../../../apis/models/user.model";
import {useApiGet} from "../../../hooks/useApiGet";
import {UserApis} from "../../../apis/endpoints/userApis";

interface RootContainerProps {
    url: string
}

// The container of root "localhost:3000/" page
const RootContainer = ({url}: RootContainerProps) => {
    const {data, error, loading} = useApiGet<UserRootObject>(url === undefined ? UserApis.GET_RANDOM_USER : url);

    const setUserData = useUserDataStore((state: UserState) => state.setUserData)

    useEffect(() => {
        setUserData(data?.results && data?.results[0])
    }, [data])

    return (
        <div data-testid="root-container" className={classes.container}>
            {loading ? "... Loading ..." : error ? "... Error ..." : <Box/>}
        </div>
    );
};

export default React.memo(RootContainer);

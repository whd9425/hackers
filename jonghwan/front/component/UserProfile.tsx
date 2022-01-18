import {Propss} from '../component/AppLayout'
import {Card , Avatar ,Button} from 'antd';
import React, { useEffect , useState , useCallback , useMemo } from "react";


const UserProjile = ({setIsLoggedIn}: Propss) =>{

        
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    },[]);

    

    return(
        <Card actions={[
            <div key="twit">짹쨱<br/>0</div>,
            <div key="followings">팔로잉<br/>0</div>,
            <div key="followings">팔로워<br/>0</div>,
        ]}>
            <Card.Meta avatar={<Avatar>ZC</Avatar>} title="테스트"/>
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    )

}

export default UserProjile
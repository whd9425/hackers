import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import NicknameEditForm from '../component/NicknameEditForm';
import FollowList from '../component/FollowList';

const Profile = () =>{

    const followingList = [{nickname:"제로초"},{nickname:"바보"},{nickname:"노드버드~"}];
    const followerList = [{nickname:"제로초"},{nickname:"바보"},{nickname:"노드버드~"}];

    return(
        <>
            <Head>
                <title>내 프로필| NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 몰록" data={followingList}/>
                <FollowList header="팔로워 몰록" data={followerList}/>
            </AppLayout>
        </>
    )

}

export default Profile
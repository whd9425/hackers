import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            // scrollY : 얼마나 스크롤 내렸는지 | clientHeight : 화면 보이는 길이 | scrollHeight 총 길이
            // scrollY + clientHeight = scrollHeight 
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) { // 화면 끝에서보다 스크롤을 300px 더 내렸을때
                if (hasMorePost && !loadPostsLoading) { // 불러오는 중이라면 request하지 않도록
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: mainPosts[mainPosts.length - 1].id,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePost, loadPostsLoading]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((c) => (
                <PostCard key={c.id} post={c} />
            ))}
        </AppLayout>
    );
};

export default Home;
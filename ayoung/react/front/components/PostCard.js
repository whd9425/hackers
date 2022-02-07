import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card, Popover, Button, Avatar, List, Comment } from 'antd';
import {
  RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined
} from '@ant-design/icons';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => { // like버튼(켜졌다 꺼졌다)
    setLiked((prev) => !prev); // false였으면 true, ture였으면 false
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id); // 
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />} // 이미지가 있으면 post.Images 넣기
        actions={[
          <RetweetOutlined key="retweet" />, // 리트윗 버튼
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> // 하트 버튼
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />, // 댓글 버튼
          <Popover key="more" content={( // 더보기 버튼
              <Button.Group>
                {id && post.User.id === id // 작성자 아이디와 같은가
                  ? (
                    <>
                      <Button>수정</Button>
                      <Button type="danger">삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentFormOpened && ( // 댓글 부분(접었다 펼쳤다)
        <div>
          <CommentForm post={post} /> {/* 어떤 게시글에 댓글을 달건지(게시글의 id가 필요함) */}
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({ // object는 shape를 이용하여 구체적으로 적어줄 수 있음
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }),
};

export default PostCard;

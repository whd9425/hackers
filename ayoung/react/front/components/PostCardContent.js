import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => ( // 첫 번째 게시글 #해시태그 #익스프레스 | 문자열이면 문자열로, 해시태그면 해시태그 링크로
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v) => { // 반복문 도는 대상 | 정규표현식 스플릿(공백+#이 보이면 끊김)
      if (v.match(/(#[^\s#]+)/)) { // 반복문 도는 대상과 일치하는지 
        return (
          <Link
            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`}
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
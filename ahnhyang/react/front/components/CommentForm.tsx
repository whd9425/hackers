import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector(state => state.user.me?.id);
  const [commentText, setCommentText] = useState("");
  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          type="primary"
          style={{ position: "absolute", right: 0, bottom: -40, zIndex : 10 }}
          htmlType="submit"
        >
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;

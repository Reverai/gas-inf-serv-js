import React from "react";
import Comment from './Comment';
//import './App.css';


export default function Post ({ post, comments }) {

	return (
		<div>
			<b>Заголовок поста:</b> {post.title} <b>Содержание поста:</b> {post.body}
      {comments && comments.map((comment,i) => 
          <Comment
            comment={comment}
          />
        )}
		</div>
	);
}
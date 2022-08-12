import React, {useState, useEffect} from "react";
import Post from './Post';
import Album from './Album';
import './App.css';
import {buildUrl} from './helper';



export default function User ({ user, posts, albums }) {
	const [comments, setComments] = useState([]);
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
    var postIds = posts.map(function(v){
      return v.id;
    });
    const commentsStringQuery = buildUrl('postId', postIds);
    fetch(`https://jsonplaceholder.typicode.com/comments${commentsStringQuery}`)
      .then(response => response.json())
      .then(data => setComments(data))    
  }, [posts])

	useEffect(() => {
    var albumIds = albums.map(function(v){
      return v.id;
    });
    const photosStringQuery = buildUrl('albumId', albumIds);
    fetch(`https://jsonplaceholder.typicode.com/photos${photosStringQuery}`)
      .then(response => response.json())
      .then(data => setPhotos(data))    
  }, [albums])

	return (
		<div className="userContainer">
			<b>Имя пользователя:</b> {user.name} Email: {user.email}
			{posts && posts.map((post) => 
          <Post
						post={post}
						comment={comments.filter((comment) => comment.postId === post.id)}
          />
			)}
			{albums && albums.map((album) => 
					<Album
						album={album}
						photos={photos.filter((photo) => photo.albumId === album.id)}
					/>
      )}
		</div>
	);
}

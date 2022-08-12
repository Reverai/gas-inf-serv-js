import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import User from './User';
import { buildUrl } from './helper';



function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham&name=Ervin%20Howell')
      .then(response => response.json())
      .then(data => setUsers(data )) 
  }, [])

  useEffect(() => {
    var userIds = users.map(function(v){
      return v.id;
    });
    const postsStringQuery = buildUrl('userId', userIds);
    fetch(`https://jsonplaceholder.typicode.com/posts${postsStringQuery}`)
      .then(response => response.json())
      .then(data => setPosts(data ))    
  }, [users])

  useEffect(() => {
    var userIds = users.map(function(v){
      return v.id;
    });
    const albumsStringQuery = buildUrl('userId', userIds);
    fetch(`https://jsonplaceholder.typicode.com/albums${albumsStringQuery}`)
      .then(response => response.json())
      .then(data => setAlbums(data ))    
  }, [users])

  return (
    <div className="App">
      {users && users.map((user,i) => 
          <User
            user={user}
            posts={posts.filter((post) => post.userId === user.id)}
            albums={albums.filter((album) => album.userId === user.id)}
          />
        )}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';


const  App = () => {
  return (
    <div className="container">
      <h1>Create Post Here Wow</h1>
      <PostCreate></PostCreate>
      <hr/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  );
}

export default App;

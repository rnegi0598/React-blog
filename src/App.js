import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create-post'>Create Post</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
        </ul>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
    </div>
  );
}

export default App;

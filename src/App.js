import {Routes,Route,Link} from 'react-router-dom';
import styles from './App.module.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className={styles.app}>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create-post'>Create Post</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
    </div>
  );
}

export default App;

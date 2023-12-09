import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Posts } from './components/posts/Posts'
import { Post } from './components/Post/Post'
import { NewPost } from './components/newPost/NewPost'

function App() {

  return (
    <div className='container'>
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to='/posts' />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/posts/new' element={<NewPost />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App

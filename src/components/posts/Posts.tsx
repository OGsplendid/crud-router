import { AddPost } from '../AddPost/AddPost'
import { TPost } from '../../models'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Posts = () => {

    const [posts, setPosts] = useState<TPost[]>([]);

    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])

  return (
        <div className='posts-container'>
            <AddPost />
            <div className='posts-wrapper'>
                {posts.map(post => (
                    <div key={post.id} className='common-post'>
                        <Link to={`/posts/${post.id}`}>{post.content}</Link>
                    </div>
                ))}
            </div>
        </div>
  )
}

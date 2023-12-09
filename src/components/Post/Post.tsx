import { useNavigate, useParams } from 'react-router-dom'
import { TPost } from '../../models'
import { useEffect, useState } from 'react';
import { CloseButton } from '../CloseButton/CloseButton';
import { deleteData, editData } from '../handlers';

export const Post = () => {

    const [post, setPost] = useState<TPost>()
    const [onEdit, setOnedit] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json())
            .then(post => setPost(post.post));
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setText(value)
    }
    
    const handleCloseClick = () => {
        setOnedit(false);
    }
    
    const handleEdit = () => {
        if (!text.trim()) return;

        const body = {
            id,
            content: text,
        }

        if (id) editData(body, id);
        setText('');
    }

    const handleUpdate = () => {
        setOnedit(true);
        if (post) setText(post.content);
    }

    const handleDelete = () => {
        if (id) deleteData(id);
        setTimeout(() => navigate('/'), 0);
    }

  return (
    !onEdit ? 
        (<div className='post'>
            {post && (
                post.content
            )}
            <div className='post-buttons'>
                <button onClick={handleUpdate} className='post-button button-update' type='button'>Update</button>
                <button onClick={handleDelete} className='post-button post-delete' type='button'>Delete</button>
            </div>
        </div>)
    :
        (<form className='new-post'>
            <textarea onChange={handleChange} className='new-post-input' value={text}></textarea>
            <button onClick={handleEdit} className="new-post-button" type='submit'>Save</button>
            <CloseButton onClick={handleCloseClick} />
        </form>)
  )
}

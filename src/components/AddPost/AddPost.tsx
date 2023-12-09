import React from 'react'
import { Link } from 'react-router-dom'

export const AddPost = () => {
  return (
    <Link className='add-new-link' to='/posts/new'><button type='button' className='add-new'>Create post</button></Link>
  )
}

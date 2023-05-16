import { AuthContext } from '../../contexts/Auth'
import './NewPost.css'
import { useContext, useRef } from 'react'

const NewPost = ({updatePosts}) => {

    const { token, user } = useContext(AuthContext)
    const textareaRef = useRef()
    
    const createPost = async () => {
        const post = await fetch(`${process.env.REACT_APP_API_URL}posts`, {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: textareaRef.current.value
            })
        })
        const result = await post.json()
        updatePosts((currentPosts) => {
            return [result.data, ...currentPosts]
        })
    }
    return (
        <div className='new'>
            <img src={user?.avatar} alt='' />
            <div className='textarea'>
                <textarea ref={textareaRef} placeholder='What is happening?'></textarea>
                <button className='btn btn-primary' type='button' onClick={createPost}>Create Post</button>
            </div>
        </div>
    )
}

export default NewPost
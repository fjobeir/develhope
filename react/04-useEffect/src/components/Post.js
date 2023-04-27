import { useState, useEffect } from 'react'
import './Post.css'

// form: create a post
// posts list
// like/dislike a post

const Post = (props) => {
    const [liked, setLiked] = useState(false)
    const toggleLike = () => {
        setLiked(!liked)
    }

    useEffect(() => {
        // run only at the first render
        console.log('useEffect with empty deps')
        // send a notification to the server 
    }, [])

    useEffect(() => {
        // run on the first render + every change on deps array
        console.log('liked has changed: ', liked)
    }, [liked])

    useEffect(() => {
        // run on first render + every state/prop change
        console.log('Hello from useEffect')
    })
    return (
        <div className='post'>
            <h3>By: {props.by}</h3>
            <p>Lorem ipsum dolor sit amit something bla bla</p>
            <div>
                <button style={{
                    border: '2px solid #282828',
                    padding: '5px 15px',
                    backgroundColor: '#282828',
                    color: 'white'
                }}
                onClick={toggleLike}
                >{liked ? "Unlike" : "Like"}</button>
            </div>
        </div>
    )
}

export default Post
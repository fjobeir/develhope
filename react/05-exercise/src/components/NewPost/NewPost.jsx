import './NewPost.css'

const NewPost = ({updatePosts}) => {
    
    const createPost = async () => {
        const post = await fetch('http://ferasjobeir.com/api/posts', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer n2nlsiJS98KKQv6vtLoGpCRljwK2BXbV24QS6SSA',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: document.getElementById('post-content').value
            })
        })
        const result = await post.json()
        updatePosts((currentPosts) => {
            return [result.data, ...currentPosts]
        })
    }
    return (
        <div className='new'>
            <img src={'https://www.gravatar.com/avatar/29d89cf61dd878d674108eb7fdeac959?s=200'} alt='' />
            <div className='textarea'>
                <textarea placeholder='What is happening?' id='post-content'></textarea>
                <button className='btn btn-primary' type='button' onClick={createPost}>Create Post</button>
            </div>
        </div>
    )
}

export default NewPost
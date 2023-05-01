import './NewPost.css'

const NewPost = () => {
    return (
        <div className='new'>
            <img src={'https://www.gravatar.com/avatar/29d89cf61dd878d674108eb7fdeac959?s=200'} alt='' />
            <div className='textarea'>
                <textarea placeholder='What is happening?'></textarea>
                <button className='btn btn-primary' type='button'>Create Post</button>
            </div>
        </div>
    )
}

export default NewPost
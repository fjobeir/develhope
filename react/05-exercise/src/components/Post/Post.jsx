import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useState } from 'react'
import { Favorite, FavoriteBorder, ChatBubbleOutline } from '@mui/icons-material'
import './Post.css'

dayjs.extend(relativeTime)

const Post = ({post}) => {
    const [detailed, setDetailed] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
        <div className="post">
            <div className='postContent'>
                <img src={post?.user?.avatar} alt={post?.user?.name} />
                <div>
                    <div className='mb-0 name'>{post?.user?.name}</div>
                    <div className='mb-2 datetime'>{dayjs().to(dayjs(post?.created_at))}</div>
                    <p>{post.content}</p>
                    <div className='icons d-flex align-items-center'>
                        <div className='me-3 border rounded border bg-light py-1 px-2 d-flex align-items-center'>
                        {false ? 
                            <Favorite color='error' onClick={() => {/** unlike the post */}} /> : 
                            <FavoriteBorder onClick={() => {/** like the post */}} /> }
                            <div className='ms-2 fw-bolder'>{post.likes_count}</div>
                        
                        </div>
                        <div className='border rounded border bg-light py-1 px-2 d-flex align-items-center'>
                            <ChatBubbleOutline onClick={() => { /** Load comments */}} />
                            <div className='ms-2 fw-bolder'>{post.comments_count}</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                detailed && (
                    <>
                        <div className='comments'>
                            {[]?.map((comment, i) => {
                                return (
                                    <div className='comment' key={i}>
                                        <img src={comment?.user?.avatar} alt={comment?.user?.name} />
                                        <div>
                                            <div className='name'>{comment?.user?.name}</div>
                                            <div className='mb-2 datetime'>{dayjs().to(dayjs(comment?.created_at))}</div>
                                            {comment.content}
                                        </div>
                                    </div>
                                )
                            })}
                            <div className='container-fluid addcomment'>
                                <div className='row'>
                                    <div className='col-9 ps-0'>
                                        <input type='text' className='form-control' placeholder='Add a new comment' />
                                    </div>
                                    <div className='col-3 p-0'>
                                        <button disabled={loading} className='btn btn-primary w-100' onClick={() => {/** Add comment */}}>
                                            <small>Add</small>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </>

                )
            }
        </div>
    )
}

export default Post
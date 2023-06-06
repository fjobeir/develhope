import React from 'react'
import { PostProps } from '../types/post'
import Post from './post'

const posts: PostProps[] = [
    {
        title: "First Post",
        content: "Lorem ipsum dolor sit amit",
        author: {
            name: "Feras",
            url: "https://www.fjobeir.com"
        },
        category: 'Social Media'
    }
]

const Posts: React.FC = () => {
    return (
        <div>
            {posts.map(({ title, content, author, category }, index) => {
                return <Post
                    title={title}
                    content={content}
                    author={author}
                    category={category}
                    key={index}
                />
            })}
        </div>
    )
}

export default Posts
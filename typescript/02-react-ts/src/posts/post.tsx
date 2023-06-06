import { PostProps } from "../types/post";

const Post: React.FC<PostProps> = ({ title, content, category, author }) => {
    return (
        <>
            <div>Title: {title}</div>
            <div>Content: {content}</div>
            <div>Author: {author.name}</div>
            <div>Category: {category}</div>
        </>
    )
}

export default Post;
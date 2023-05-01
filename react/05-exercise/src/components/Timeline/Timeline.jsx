import './Timeline.css'
import Menu from '../Menu/Menu';
import NewPost from "../../components/NewPost/NewPost"
import Head from "../../components/Head/Head"
import Post from "../../components/Post/Post"

const samplePostsResponse = [
    {
        comments_count: "0",
        content: "we missed you front-end :(",
        created_at: "2023-01-12 13:53:03",
        id: 2120,
        liked_by_current_user: false,
        likes_count: "0",
        updated_at: "2023-01-12 13:53:03",
        user: {
            avatar: "https://www.ferasjobeir.com/storage/public/DlJPyWWvVs2g49cktl5y0qrFWeuKzHbi7Uwhg5ug.png",
            created_at: "2022-11-29 20:53:48",
            email: "shrikihassan6@gmail.com",
            id: 149,
            name: "Hassan shoriki",
            updated_at: "2022-12-17 00:49:31",
        }
    },
    {
        comments_count: "5",
        content: "Posted while being offline ... waiting a network signal",
        created_at: "2022-12-23 13:24:23",
        id: 2102,
        liked_by_current_user: false,
        likes_count: "0",
        updated_at: "2022-12-23 13:24:23",
        user: {
            avatar: "https://www.ferasjobeir.com/storage/public/5UWBx5jiHKGQzbqeY1rXXA3LE3FFRPgMkdjiqj2q.jpg",
            created_at: "2022-09-04 07:17:23",
            email: "fjobeir@gmail.com",
            id: 1,
            name: "Feras Jobeir",
            updated_at: "2022-12-07 21:38:20",
        }
    }
]

const Timeline = () => {

    return (
        <div className="wrapper">
            <Menu />
            <div className="content">
                <Head title={'Home'} />
                <NewPost setPosts={() => { } /** setPosts */} />
                <div className="mb-4">
                    {
                        samplePostsResponse.map((post, i) => {
                            return <Post post={post} key={`post-${post?.id}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline;
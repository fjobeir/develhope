import './Timeline.css'
import Menu from '../Menu/Menu';
import NewPost from "../../components/NewPost/NewPost"
import Head from "../../components/Head/Head"
import Post from "../../components/Post/Post"
import { useEffect, useState } from 'react';

// https://documenter.getpostman.com/view/3880121/VUxUN5M4

const Timeline = () => {
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        fetch(`${process.env.REACT_APP_API_URL}posts?page=1`, {
            headers: {
                'Authorization': 'Bearer n2nlsiJS98KKQv6vtLoGpCRljwK2BXbV24QS6SSA'
            }
        }).then((response) => {
            response.json().then((json) => {
                setPosts(json.data.data)
            })
        })
    }
    
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="wrapper">
            <Menu />
            <div className="content">
                <Head title={'Home'} />
                <NewPost updatePosts={setPosts} />
                <div className="mb-4">
                    {
                        posts.map((post, i) => {
                            return <Post post={post} key={`post-${post?.id}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline;
import './Timeline.css'
import Menu from '../Menu/Menu';
import NewPost from "../../components/NewPost/NewPost"
import Head from "../../components/Head/Head"
import Post from "../../components/Post/Post"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import Wrapper from '../Wrapper/Wrapper';

// https://documenter.getpostman.com/view/3880121/VUxUN5M4

const Timeline = () => {
    const [posts, setPosts] = useState([])
    const { token } = useContext(AuthContext)
    const getPosts = () => {
        fetch(`${process.env.REACT_APP_API_URL}posts?page=1`, {
            headers: {
                'Authorization': `Bearer ${token}`
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
        <Wrapper>
            <Head title={'Home'} />
            <NewPost updatePosts={setPosts} />
            <div className="mb-4">
                {
                    posts.map((post, i) => {
                        return <Post post={post} key={post.id} />
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Timeline;
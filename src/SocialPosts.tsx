import PostInList from "./PostInList";
import PostForm from "./PostForm";
import { useState } from "react";
import Post from "./Post";

function SocialPosts() {
    const [ modalOpen, setOpen ] = useState(false);
    const [ postList, setPostList ] = useState(
        [{
            title: 'Hello -- testing, testing!',
            thought: 'Does this thing actually work??'
        }]);

    const addPost = (post: Post) => {
        setPostList((prevPostList) => {
            return [ ...prevPostList, post ]
        })
    };

    const postDelete = (i: number) => {
        setPostList((prevPostList) => {
            return [...prevPostList.slice(0, i), ...prevPostList.slice(i + 1)];
        })
        
    }

    return (
        <div className='newThought'>
            <h1 className='title'>My Thoughts</h1>
            <div className='mainButton'>
                <button className='modal-btn' onClick={ () => setOpen(true) }>New Thought</button>
            </div>
            <div className='postBox'>
                <p className='posted'>
                    {postList.length <= 0 && 'No thoughts... head empty....'}
                    {postList.map( (post, i) => {
                        return (
                            <PostInList 
                                post={post}
                                onDelete={ () => postDelete(i)}
                            />
                        )
                    })}
                </p>
            </div>
            { modalOpen === true && <PostForm onAdd={addPost} onClose={() => setOpen(false)}/> }
        </div>
    )
};

export default SocialPosts;
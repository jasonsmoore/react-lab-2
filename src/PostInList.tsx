import Post from "./Post";

interface PostProp {
    post : Post,
    onDelete: () => void
}

function PostInList( { post, onDelete } : PostProp ) {
    return (
        <div className='singlePost'>
            <div className='inList'>
                <h2>{post.title}</h2>
                <p>{post.thought}</p>
                <button className='trash' onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
};

export default PostInList;
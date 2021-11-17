// displays new post form

function PostForm() {
    return (
        <div className='modal-bg'>
            <div className='modal'>
                <label className='titleHdr' htmlFor='title'>Title</label>
                <input id='title' type='text'></input>
                <label className='thoughtHdr' htmlFor='thought'>Thought</label>
                <input id='thought' type='text'></input>
                <button className='addPost-btn'>Add Post</button>
            </div>
        </div>
    )
};

export default PostForm;
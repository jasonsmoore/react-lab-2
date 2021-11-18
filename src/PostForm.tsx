import { useState } from "react";
import Post from "./Post";

interface openClose {
    onAdd : Function,
    onClose : Function
}

function PostForm({ onAdd, onClose }: openClose) {
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    return (
        <div className='modal-bg'>
            <div className='modal'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onAdd({ title, thought })
                }}>
                    <button className='closeBtn' onClick={ () => onClose() }>Close</button>
                    <label className='titleHdr' htmlFor='title'>Title:</label>
                    <input onChange={e => setTitle(e.target.value)} name='title' id='title' type='text'></input>
                    <label className='thoughtHdr' htmlFor='thought'>Thought:</label>
                    <textarea onChange={e => setThought(e.target.value)} name='thought' id='thought'></textarea>
                    <button type='submit' className='addPost-btn'>Add Post</button>
                </form>
            </div>
        </div>
    )
};

export default PostForm;
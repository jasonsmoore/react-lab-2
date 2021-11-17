// parent component

import PostInList from "./PostInList";

function SocialPosts() {
    return (
        <div className='newThought'>
            <h1 className='title'>My Thoughts</h1>
            <div className='mainButton'>
                <button className='modal-btn'>New Thought</button>
            </div>
            <div className='postBox'>
                <p className='posted'>
                    <PostInList post=
                        {{
                            title: 'Hello -- testing, testing',
                            thought: 'Does this thing actually work?'
                        }}
                            onDelete={() => {console.log('delete')}}/>
                </p>
            </div>
        </div>
    )
};

export default SocialPosts;
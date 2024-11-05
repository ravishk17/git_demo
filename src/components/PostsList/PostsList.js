import { useState } from 'react';
import Post from '../Post/Post'
import NewPost from '../NewPost/NewPost';
import classes from './PostsList.module.css'
import Modal from '../Modal/Modal';
function PostsList(props){
    // const [enteredBody, setEnteredBody] = useState('');
    // const [enteredAuthor, setEnteredAuthor] = useState('');
    // const [modalIsVisible, setModalIsVisible] = useState(true);
    // function changeBodyHandler(event){
    //     setEnteredBody(event.target.value);
    // }
    // function changeAuthorHandler(event){
    //     setEnteredAuthor(event.target.value);
    // }

    // function hideModalHandler(){
    //     setModalIsVisible(false);
    // }

    // let modalContent;
    // if(modalIsVisible){
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //         <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
    //     </Modal>
    //     );
    // }
    const [posts, setPosts]=useState([]);
    function addPostHandler(postData){
        // setPosts([postData, ...posts]);
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    return (
        <>
        {/* {modalIsVisible?<Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
        </Modal>:null} */}

        {/* {modalContent} */}
        {props.isPosting && (<Modal onClose={props.onStopPosting}>
            <NewPost  onCancel={props.onStopPosting} onAddPost={addPostHandler}/>
        </Modal>)}
        {posts.length>0 && (
            <ul className={classes.posts}>
            {/* <Post author={enteredAuthor} body={enteredBody}/> */}
            {/* <Post author="Rasvish" body="Catching up with the React"/> */}
            {
                posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)
            }
        </ul>
        )}
        {posts.length === 0 && (
            <div style={{textAlign:'center',color:'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some!</p>
            </div>
        )}
        </>
    )
}

export default PostsList;
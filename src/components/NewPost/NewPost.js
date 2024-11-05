import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
    // const [enteredBody , setEnteredBody] = useState('');

    // function changeBodyHandler(event){
        // console.log(event.target.value);
        // setEnteredBody(event.target.value);
    // }
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    // const [modalIsVisible, setModalIsVisible] = useState(true);
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    function submitHandler(event){
      event.preventDefault();
      const postData = {
        body: enteredBody,
        author:enteredAuthor
      };
      console.log(postData);
      props.onAddPost(postData);
      props.onCancel();
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
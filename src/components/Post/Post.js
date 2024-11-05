// const names = ['Ravish', 'Medou'];
import classes from './Post.module.css'; 
function Post(props){
    // const chosenName = Math.random()>0.5?names[0]:names[1];
    return (
        <li className={classes.post} onClick={()=>props.delete(props.id)}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    )
}

export default Post;
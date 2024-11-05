// const names = ['Ravish', 'Medou'];
import classes from './Post.module.css'; 
function Post(props){
    // const chosenName = Math.random()>0.5?names[0]:names[1];
    return (
        <li className={classes.post}>
            <div className={classes.frame}>
                <p className={classes.text}>{props.body}</p>
                <p className={classes.author}>~By {props.author}</p>
            </div>
        </li>
    )
}

export default Post;
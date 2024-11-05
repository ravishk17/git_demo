import { MdPostAdd, MdMessage } from 'react-icons/md';
import blog from '../../icons/blog.png';
import classes from './MainHeader.module.css';

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {/* <MdMessage /> */}
        <img src={blog} style={{ width: '56px', height: '56px'}}/>
      </h1>
      <p>
        <button className={classes.button} onClick={props.onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
import "./PostItems.scss";
import Avatar from "../Avatar";
import AuthorName from "./AuthorName/AuthorName";
import {RxDotsHorizontal} from 'react-icons/rx';
import Images from "../Images";
const PostItems = ({ authorName, date, title,iconOne,iconTwo,iconThree,image }) => {
  return (
    <div className="post-wrapper">
      <div className="post-author">
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt={authorName}  />
        <AuthorName name={authorName} date={date} />
      </div>
        <span className="dot"> <RxDotsHorizontal /></span>
       {title}
       <div className="post-img">
        <Images src={image} alt=""/>
       </div>
       <div className="icons">
        {iconOne}<span> like </span> {iconTwo} <span>comment</span> {iconThree}<span> share</span>
       </div>
     

    </div>
  );
};
export default PostItems;

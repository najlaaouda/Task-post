import Desc from '../Components/PostItems/Desc';
import { SiGithubsponsors }from 'react-icons/si';
import { BiCommentDetail }from 'react-icons/bi';
import { RiShareForwardLine }from 'react-icons/ri';
import postImage from '../../public/2.jpg';
import nature from '../../public/1.jpg'

import {
  AiOutlineLike,
  AiOutlineGithub,
  AiFillChrome
}from 'react-icons/ai';
export default[
  {
    id:"1",
    authorName:"Ahmed Ali",
    date:"Today at 10:00",
    title:(<Desc>
           <span>Lorem Lorem</span>
           <a href='#'>Google</a>
          </Desc>),
   image: postImage,      
   iconOne:<AiOutlineLike   size={25}  />  ,
   iconTwo:<BiCommentDetail   size={25} /> ,
   iconThree:<RiShareForwardLine    size={25}  />      
  },
  {
    id:"2",
    authorName:"Khaleed Ali",
    date:"Today at 10:00",
    title:(<Desc desc="Lorem Lorem" />),
    image: nature, 
    iconOne:<SiGithubsponsors   size={25}/>,
    iconTwo:<AiOutlineGithub  size={25}/> ,
    iconThree:<AiFillChrome  size={25}/> 
  },
  {
    id:"3",
    authorName:"Khaleed Ali",
    date:"Today at 10:00",
    title:(<Desc>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      <a href='#'>Google</a>
     </Desc>),
    image: postImage,   
    iconOne:<SiGithubsponsors   size={25}/>,
    iconTwo:<AiOutlineGithub  size={25}/> ,
    iconThree:<AiFillChrome  size={25}/> 
  }
]
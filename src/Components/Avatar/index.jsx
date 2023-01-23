import './Avatar.scss';
const Avatar =({src,alt}) =>{
  return( 
    <div className="avatar-wrapper">
     <img src={src}  alt={alt} className="avatar-sm"/>
    </div>
  )
}

export default Avatar;

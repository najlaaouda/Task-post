import './Images.scss'
const Images =({src,alt})=>{
  return(
  <div className="image-wrapper">
   <img src={src} alt={alt} className="post-img"/>
  </div>)
}

export default Images;
import './AuthorName.scss'
const AuthorName=({name,date})=>{
  return(
    <div className="post-name">
      <h3>{name}</h3>
      <span>{date}</span>
    </div>
 

  )
}
export default AuthorName;
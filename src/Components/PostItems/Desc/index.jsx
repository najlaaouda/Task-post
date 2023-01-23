import './Desc.scss'
const Desc=({desc,children})=>{
  return(
    <div className="text-wrapper">
      {children?children:<span>{desc}</span>}
     
    </div>
  )
}

export default Desc;
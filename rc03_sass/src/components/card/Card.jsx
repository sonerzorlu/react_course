import './Card.css'

const Card = ({name,img,tel}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img style={{width: "300px"}} src={img} alt="" />
      <p>{tel}</p>
    </div>
   
  )
}

export default Card
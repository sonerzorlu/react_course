

// const Person = (props) => {
//   return (
    
//     <div>
//         <h2>Hi, My Name is {props.name}</h2>
//         <img src={props.img} alt="" />
//         <p>{props.tel}</p>
//     </div>
//   )
// }

// export default Person

import Msg from "./Msg"
const Person = ({name,img,tel}) => {
  return (
    
    <div>
        {/* <h2>Hi, My Name is {name}</h2> */}
        <Msg name={name}/>
        <img style={{width: "300px"}} src={img} alt="" />
        <p>{tel}</p>
    </div>
  )
}

export default Person
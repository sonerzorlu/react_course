import magnolia from "./img/magnolia.jpg"
import "./Content.css"
const Content = () => {

    const pStyle ={
        fontFamily : "Tahoma",
        color: "blue",
        fontSize :"1.3rem",
        lineHeigth : "1.5"
    }

    const imgStyle = {
        display : "block",
        margin : "2rem",
        width : "400px"

    }
  return (
    <div>
        <h2 style={{color:"red",backgroundColor:"yellow"}}>React JS</h2>
        <p style={pStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, necessitatibus, quam eos molestias dolorem labore consequuntur commodi itaque sequi ab vel repudiandae exercitationem.</p>

        <img style={imgStyle} src={magnolia} alt="magnolia-img" />

        <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas porro quasi asperiores fuga, quo laborum est expedita nostrum voluptate, impedit distinctio natus.</p>

        <p className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti officia dicta eum, aliquid quam quas sint obcaecati, asperiores optio quibusdam minus soluta qui ipsam ad totam neque?</p>
    </div>
  )
}

export default Content
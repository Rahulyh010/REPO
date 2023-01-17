
import { Link } from "react-router-dom"

function Navbar(){

    return <div>
        <div 
        style={{
           color:"black",
           backgroundColor:"darkcyan",
           width:"100%",
           height:"60px",
           display:"flex",
           justifyContent:"space-between",
        alignItems:"center"
        }}
        >
<div>
<Link to="/">Home</Link>
</div>

<div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"30%"}}>

<Link to="/all">All</Link>
<Link to="/js">JS</Link>
<Link to="/css">CSS</Link>
<Link to="/html">HTML</Link>


</div>
        </div>
    </div>
}

export default Navbar
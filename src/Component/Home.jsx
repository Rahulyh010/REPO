import { Link } from "react-router-dom"

function Home(){
    return <div>
<h1>Home Page</h1>

<button><Link to="/all">All</Link></button>
<button><Link to="/js">JS</Link></button>
<button><Link to="/css">CSS</Link></button>
<button>
<Link to="/html">HTML</Link></button>







    </div>
}

export default Home
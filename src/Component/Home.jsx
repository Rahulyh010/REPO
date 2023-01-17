import { Link } from "react-router-dom"

function Home(){
    return <div>
<h1>Home Page</h1>

<Link to="/">Home</Link>
<Link to="/all">All</Link>

    </div>
}

export default Home
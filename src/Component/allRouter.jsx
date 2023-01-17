import { Route, Routes } from "react-router-dom";
import All from "./All";
import Home from "./Home";


function AllRouter(){

    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<All/>}/>
    </Routes>
}

export default AllRouter
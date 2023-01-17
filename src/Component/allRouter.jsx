import { Route, Routes } from "react-router-dom";
import All from "./All";
import CSS from "./Css";
import Home from "./Home";
import HTML from "./Html";
import JS from "./Javascript";


function AllRouter(){

    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<All/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/css" element={<CSS/>}/>
        <Route path="/js" element={<JS/>}/>
    </Routes>
}

export default AllRouter
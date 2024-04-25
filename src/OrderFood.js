import { type } from "os";
import React from "react" ; 
import ReactDOM from "react-dom/client" ;  
import Header from "./components/Header" ; 
import RestaurantCards from "./components/RestaurantCards"; 
import Body from "./components/Body" ; 
import {mockData} from "./utils/mockData" ; 
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom" ; 
import About from "./components/About" ; 
import Error from "./components/Error" ; 
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";





const AppLayout = () => {
    return <div className="appLayout">
        <Header/>
        <Outlet/>
    </div>
}

const appRouter = createBrowserRouter([
    {
        path : "/" , 
        element : <AppLayout/>,
        children : [
            {
                path: "/" , 
                element : <Body />
            } , 
            {
                path : "About" , 
                element : <About />
            } , 
            {
                path: "Contact" , 
                element : <Contact />
            } , 
            {
                path: "/restaurants/:resId" , 
                element : <RestaurantMenu/>
            }
        ] , 
        errorElement : <Error/>
    } 
]) ; 



const root = ReactDOM.createRoot(document.getElementById("root")) ; 

// root.render(<AppLayout/>) ; 

root.render(<RouterProvider  router = {appRouter} />)
import { LOGO_URL } from "../utils/constants";
import {useState , useEffect} from "react" ; 
import {Link} from "react-router-dom" ; 
const Header = () => {
    // let btnName = "Login" ; 
    let [btnNameReact , setbtnNameReact] = useState("Login") ;

    // let isLoggedIn = () => logged == false ? false : true ; 
    // let setbtnName = () => {

    // }; 

    return (

        <div className = "header">
            <div className = "logo-container">
                <img className="logo" src={LOGO_URL} alt="image here" />
            </div>
            <div className="nav-items">
                <ul className="unorderedList">
                    <li>   <Link to = "/">Home</Link>  </li>
                    <li>   <Link to = "/About">About Us</Link>   </li>
                    <li>   <Link to = "/Contact">Contact Us</Link>   </li>
                    <li>     <Link to = "/st">Cart</Link> </li>
                    <button className="login" onClick={() =>{
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                    }} >{btnNameReact}  {console.log(btnNameReact)}</button>
                    {/* <button class = "login" onClick={() =>{
                        setbtnName("Logout")
                    }} >{btnName}</button> */}
                </ul>
            </div>   
        </div>
    )
} ; 

export default Header ; 
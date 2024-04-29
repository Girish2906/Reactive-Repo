import { LOGO_URL } from "../utils/constants";
import {useState , useEffect} from "react" ; 
import {Link} from "react-router-dom" ; 
import useOnlineStatus from "../utils/useOnlineStatus";




const Header = () => {
    // let btnName = "Login" ; 
    let [btnNameReact , setbtnNameReact] = useState("Login") ;
    let onlineStatus = useOnlineStatus() ; 
    // let isLoggedIn = () => logged == false ? false : true ; 
    // let setbtnName = () => {

    // }; 

    return (

        <div className = "flex justify-between bg-green-200  sm:bg-yellow-100 lg:bg-pink-100 shadow-2xl m-2 mb-2" >
            <div className = "logo-container">
                <img className="w-56" src={LOGO_URL} alt="image here"  />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-7 m-4">
                    <li className="px-4">  Online Status {onlineStatus == true ? "✅" : "🔴" }   </li>
                    {/* <li>  {onlineStatus == true ?  "Online Status: ✅" : "Offline Status: ✅" }  </li> */}
                    <li className="px-4">   <Link to = "/Greetings">Greetings</Link>  </li>
                    <li className="px-4">   <Link to = "/">Home</Link>  </li>
                    <li className="px-4">   <Link to = "/About">About Us</Link>   </li>
                    <li className="px-4">   <Link to = "/Contact">Contact Us</Link>   </li>
                    <li className="px-4">     <Link to = "/st">Cart</Link> </li>
                    <li className="px-4">   <Link to = "/Groceries">Groceries</Link> </li>
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
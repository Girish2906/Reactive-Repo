import {useEffect , useState} from "react" ; 
import react from "react" ;  
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom" ; 
import { MENU_URL } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import useRestaurantMenu  from "../utils/useRestaurantMenu.js" ; 


const RestaurantMenu = () => {
    // const [resInfo , setresInfo] = useState(null) ; 

    const {resId} = useParams() ;  

    // const [resMenuInfo , setResMenuInfo] = useState(null) ; 

    const resMenuInfo = useRestaurantMenu(resId) ;
    // const {resId} = useParams() ;  
    console.log("hell") ; 
    console.log(resId) ;  
    // console.log(resInfo) ; 
    // useEffect( () => {
    //     fetchMenu() ; 
    // } , []) ; 
    // console.log("Value of a just when the restaurant menu loads: " , ++a) ; 
    const fetchMenu = async () => {
        // console.log("Value at a just at the start of fetchMenu function" , a) ; 
        // console.log("UseEffect function fetchMenu being called lets see before or after")
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
        // const json = await data.json() ; 
        // console.log("This is the resInfo object",json) ; 
        // setresInfo(json.data) ;  
        // const data2 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=362852&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER") ; 
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId) ; 
        const json = await data.json() ; 
        // console.log("json2 variable is" , json2) ; 
        setResMenuInfo(json.data) ; 
        console.log("This is resMenuInfo", resMenuInfo) ; 
        // console.log("This is the resMenuInfo object" , resMenuInfo) ; 
        // console.log(json2) ; 

        // console.log(resInfo) ; 
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name) ; 
        // console.log("This is an object", resInfo) ;  
        // console.log("This is second console.log" , resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]?.info?.cuisines ) ; 
        // console.log( "This is shit" , resInfo?.cards[0]?.card?.card?.info) ; 
    } ; 
    if( resMenuInfo === null ){
        return <Shimmer />
    }
    console.log("This is resMenuInfo" . resMenuInfo) ; 
    const {name , cuisines, costForTwoMessage , cloudinaryImageId} = resMenuInfo?.cards[2]?.card?.card?.info ; 
    console.log(name) ; 
     console.log(cuisines) ; 
    console.log(cloudinaryImageId) ; 
    console.log("This is resMenuInfo" , resMenuInfo) ; 
    console.log("This is resMenuInfo" , resMenuInfo) ; 
    const categories = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap ; 
    console.log("These are some fucking categories" , categories) ; 
    const categories2 = categories?.REGULAR?.cards.filter( (e) => {
        return e?.card?.card?.["@type"].includes("ItemCategory") ; 
    } )
    console.log("This is categories2",categories2) ;  
    // console.log(resInfo) ; 
    // console.log("just after resInfo check",resInfo.cards[1].card.card.gridElements.infoWithStyle.restaurants[1].info.name) ; 
    // console.log("Value of a just after the fetchMenu function completes: " , ++a) ; 
    // console.log("This is ",resInfo) ; 
    // console.log("a simple log statement" , resInfo?.cards[0]?.card?.card) ; 
    // const {name, cuisines , costForTwo , avgRating} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info ; 
    // const {name , cuisines} = resInfo?.cards[2]?.card?.card?.info ; 
    // console.log("Resinfo and cards" , resInfo?.cards[1]) ; 
    // const {menu} = resMenuInfo ; ;o  ZS4RDC TV    B8I
    // const {name , cuisines} = resInfo?.cards[1]?.card?.card?.gridElement?.infoWithStyle?.restaurants ; 
    console.log("this is the fucking menu",resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR) ; 
    const {REGULAR} = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap; 
    console.log("This is regular ",REGULAR) ; 
    const cards = REGULAR.cards ; 
    console.log(typeof(REGULAR)) ; 
    console.log("These are cards" ,cards); 
     return (
        <div className="menu">
            {/* {console.log(REGULAR?.cards[3]?.card?.card?.itemCards[0]?.card?.info?.name)} */}
            {/* {const {name, cuisines, costForTwo} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info; } */}
            {/* <img class = "restaurantImageLogo" src={IMAGE_URL+cloudinaryImageId} alt="Image here" /> */}
            <h1>{name}</h1>
            <h3>{cuisines.join(', ') } - {costForTwoMessage}</h3>
            {/* <h3>{costForTwo}</h3> */}
            {/* <h3>{avgRating}</h3> */}
            {/* <h2>Menu</h2> */}
            <ul>
                {/* <p>{cards[3]?.card?.card?.itemCards[1]?.card?.info?.name}</p> */}
                {/* from here */}
                {/* <p>{cards[3]?.card?.card?.itemCards[2]?.card?.info?.name}</p>
                <p>{cards[3]?.card?.card?.itemCards[3]?.card?.info?.name}</p>
                <p>{cards[3]?.card?.card?.itemCards[4]?.card?.info?.name}</p>
                <p>{cards[3]?.card?.card?.itemCards[5]?.card?.info?.name}</p> */}
                {/* till here */}
                {/* <p>{cards[4]?.card?.card?.itemCards[1]?.card?.info?.name}</p>
                <p>{cards[4]?.card?.card?.itemCards[2]?.card?.info?.name}</p>
                <p>{cards[4]?.card?.card?.itemCards[3]?.card?.info?.name}</p> */}
                {/* <p>{cards[4]?.card?.card?.itemCards[0]?.card?.info?.name}</p> */}
                {/* <p>{cards[4]?.card?.card?.itemCards[1]?.card?.info?.name}</p> */}
                {/* <p>{cards[4]?.card?.card?.itemCards[2]?.card?.info?.name}</p> */}
                {/* <p>{cards[4]?.card?.card?.itemCards[3]?.card?.info?.name}</p>  */}
            </ul>
        </div>
    ) ; 
} ; 

export default RestaurantMenu ; 
import {useEffect , useState} from "react" ; 
import react from "react" ;  
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom" ; 
import { MENU_URL } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import useRestaurantMenu  from "../utils/useRestaurantMenu.js" ; 
import RestaurantCategory from "./RestaurantCategory.js";


const RestaurantMenu = () => {

    const {resId} = useParams() ;  

    const [showIndex, setShowIndex ] = useState(true) ; 

    const resMenuInfo = useRestaurantMenu(resId) ;
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=435686&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER") ; 
        const json = await data.json() ;  
        setResMenuInfo(json.data) ; 
    } ; 
    if( resMenuInfo === null ){
        return <Shimmer />
    }
    const {name , cuisines, costForTwoMessage , cloudinaryImageId} = resMenuInfo?.cards[2]?.card?.card?.info ; 
    const category = resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap ;  
    const categories = category?.REGULAR?.cards.filter( (e) => {
        return e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    } ) ; 
    let index =0 ; 
     return (
        <div className="text-center">
            <h1 className="font-extrabold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg" >{cuisines.join(', ') } - {costForTwoMessage}</h3>
            { categories.map( (category , index) =>  <  RestaurantCategory key = {index}  data = {category.card.card} showItems = {index === showIndex ? true : false }
            setShowIndex = {() => setShowIndex(index)} /> )  }
        </div>
    ) ; 
} ; 

export default RestaurantMenu ; 
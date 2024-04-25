import {useEffect , useState} from "react" ; 
import react from "react" ;  
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const [resInfo , setresInfo] = useState() ; 

    useEffect( () => {
        fetchMenu() ; 
    } , []) ; 

    const fetchMenu = async () => {
        console.log("UseEffect function fetchMenu being called lets see before or after")
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
        const json = await data.json() ; 
        console.log(json) ; 
        setresInfo(json.data) ;  
        console.log(json.data.cards[4]) ; 
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name) ; 
        console.log("This is an object", resInfo) ;  
        console.log("This is second console.log" , resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]?.info?.cuisines ) ; 
        // console.log( "This is shit" , resInfo?.cards[0]?.card?.card?.info) ; 
    } ; 

    // const {name , cuisines ,  costForTwo } = resInfo?.cards[1]?.card?.card?.info ; 
    // const {name , cuisines , costForTwo} = resInfo?.cards[4]
    // const {name , cuisines , cloudinaryImageId , costForTwoMessage , avgRating} = resInfo?.cards[1]?.gridElements?.infoWithStyle?.restaurants ; 
    // const {name , cuisines , cloudinaryImageId , costForTwoMessage , avgRating} = resInfo?.cards[0]?.card?.card?.info ;  
    // const { cuisines , cloudinaryImageId , costForTwoM , avgRating} = resInfo?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle ; 
    // const {cuisines , cloudinaryImageId , costForTwoM , avgRating } = resInfo?.card?.card?.gridElements?.infoWithStyle?.restaurants ; 
    // console.log(resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
    // const { name , cuisines , cloudinaryImageId , costForTwoM , avgRating} = resInfo ; 
    // console.log("This the object we found out", resInfo.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.name) ; 
    // const {name , cuisines ,  costForTwo } =  resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info ; 
    // console.log(name) ;
    // console.log(cuisines) ; 
    // console.log(costForTwo) ; 
    // console.log(name) ; 
    // console.log(resInfo?.cards[4].card.card.gridElements) ; 

    // const {name , cuisines ,  costForTwo }= resInfo?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]?.info?.cuisines ; 


    // if(resInfo === undefined)
    //     return <Shimmer/>
    return resInfo === null ? <Shimmer/> : 
     (
        <div>
           {/* {const {name , cuisines} = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]?.info; } */}
            {console.log("Inside the return tag")}
            <h1>Lets see I don't know what happens next in my life</h1>
            {/* <h2>{name}</h2> */}
            {/* <h2>{cuisines}</h2> */}
            {/* <h1>{resInfo?.cards[4]}</h1> */}
           
        </div>
    ) ; 
} ; 

export default RestaurantMenu ; 
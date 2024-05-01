// import { resList } from "../utils/mockData";
import RestaurantCards , {withPromotedLabel} from "./RestaurantCards";
import {useState , useEffect} from "react" ; 
import resList from "../utils/mockData" ; 
import Shimmer from "./Shimmer";
import { filter } from "domutils";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {Link} from "react-router-dom" ; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    let [listOfRestaurants , setlistOfRestaurants] = useState(resList) ; 
    let [filteredRestaurants , setfilteredRestaurants] = useState([]) ; 


    const [searchText , setsearchText] = useState("") ; 
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCards)  ; 
    useEffect(() => { 
      fetchData()
    } , []) ; 
    const fetchData = async  () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
      const json = await data.json() ; 
      console.log(json) ; 
      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
      setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
    }
    if(listOfRestaurants.length == 0){
      <Shimmer/>
    }

    const onlineStatus = useOnlineStatus() ; 

    if(onlineStatus === false)
        return <h1>Look's like you are offline</h1>
    return (
        <div className="body">
            <div className="filter flex">
              <div className="Search m-4 p-4">
              <input type="text" className="border border-solid border-black " value={searchText} placeholder="Name of restaurant"
              onChange={(e) => {
                setsearchText(e.target.value) ; 
              }}
               />
               {console.log("Getting rendered") }
                <button className=" m-4 bg-green-200 px-4 py-2 rounded-3xl hover:bg-green-400"
                    onClick={() => {
                      const filteredList= listOfRestaurants.filter( (restaurant) => {
                        console.log(searchText) ; 
                        return (restaurant.info.name.toLowerCase()).includes(searchText.toLowerCase()) ; 
                      }) ;  
                      setfilteredRestaurants(filteredList) ; 
                    }}
                >Search</button>
              </div>
               <div className="Search m-4 p-4 flex items-center">
                <button className=" bg-gray-200 px-4 py-2 hover:bg-gray-500" onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant) =>  restaurant.info.avgRating >= 4 ) ; 
                    console.log("on the body page") ;
                    setfilteredRestaurants(filteredList); 
                  }} >
                      Top Rated Restaurant
                  </button>
               </div>

            </div>
            <div className="flex flex-wrap">
              { 
                filteredRestaurants.map( (restaurant , index) => (
                  <Link to = {"/restaurants/" + restaurant.info.id}>  
                    {
                      restaurant.info.isOpen ? <RestaurantCardPromoted  key = {index} resData = {restaurant} /> :  <RestaurantCards key={restaurant.info.id } resData = {restaurant}/>  
                    }
                   </Link> 
                ))
     
              }
            </div>
        </div>
    ) ; 
} ; 

export default Body ;    
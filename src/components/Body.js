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
      // console.log("useEffect called") ; 
      fetchData()
    } , []) ; 
    // console.log("Rendering body") ; 
    const fetchData = async  () => {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ; 
      // console.log(data) ; 
      // console.log(data) ; 
      const json = await data.json() ; 
      console.log(json) ; 
      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
      setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ; 
    }
    // console.log(data) ; 
    if(listOfRestaurants.length == 0){
      // <h1>Loading...</h1>
      <Shimmer/>
    }

    let listOfRestaurants2 = [
        {
            "info": {
              "id": "14552",
              "name": "Pizza Hut",
              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
              "locality": "Murugeshpalya",
              "areaName": "Murugeshpalya",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 3.8,
              "availability": {
                "nextCloseTime": "2024-04-16 07:00:00",
                "opened": true
              }
            }
        },
        {
            "info": {
              "id": "408386",
              "name": "NOTO - Ice Creams & Desserts",
              "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
              "locality": "Ejipura",
              "areaName": "Koramangla",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Ice Cream"
              ],
              "avgRating": 4.4,
              "veg": true,
              "isOpen": true,
              "type": "F",
            },
        }
    ] ; 

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
                      // setlistOfRestaurants(filteredList) ; 
                      setfilteredRestaurants(filteredList) ; 
                    }}
                >Search</button>
                {/* </input> */}
              </div>
              {/* <button>Search</button> */}
               <div className="Search m-4 p-4 flex items-center">
                <button className=" bg-gray-200 px-4 py-2 hover:bg-gray-500" onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurant) =>  restaurant.info.avgRating > 4.0 ) ; 
                    // console.log(listOfRestaurants) ;
                    setfilteredRestaurants(filteredList); 
                  }} >
                      Top Rated Restaurant
                  </button>
               </div>

            </div>
            <div className="flex flex-wrap">
              {
                // this is basically a function, returning a piece of JSX. 
                filteredRestaurants.map( restaurant => (
                  <Link to = {"/restaurants/" + restaurant.info.id}>  
                    {
                      restaurant.info.isOpen ? <RestaurantCardPromoted resData = {restaurant} /> :  <RestaurantCards key={restaurant.info.id } resData = {restaurant}/>  
                    }
                      {/* <RestaurantCards key={restaurant.info.id } resData = {restaurant}/>   */}
                   </Link> 
                ))
     
              }
            </div>
        </div>
    ) ; 
} ; 

export default Body ; 
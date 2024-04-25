// import { resList } from "../utils/mockData";
import RestaurantCards from "./RestaurantCards";
import {useState , useEffect} from "react" ; 
import resList from "../utils/mockData" ; 
import Shimmer from "./Shimmer";
import { filter } from "domutils";

const Body = () => {
    let [listOfRestaurants , setlistOfRestaurants] = useState(resList) ; 
    let [filteredRestaurants , setfilteredRestaurants] = useState([]) ; 

    const [searchText , setsearchText] = useState("") ; 
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

    return (
        <div className="body">
            <div className="filter">
              <div className="Search">
              <input type="text" className="search-box" value={searchText} placeholder="Enter name of restaurant"
              onChange={(e) => {
                setsearchText(e.target.value) ; 
              }}
               />
               {console.log("Getting rendered") }
                <button
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
                <button className="filter-btn" onClick={() => {
                  const filteredList = listOfRestaurants.filter((restaurant) =>  restaurant.info.avgRating > 4.0 ) ; 
                  // console.log(listOfRestaurants) ;
                  setfilteredRestaurants(filteredList); 
                }} >
                    Top Rated Restaurant
                </button>

            </div>
            <div className="res-container">
              {
                // this is basically a function, returning a piece of JSX. 
                filteredRestaurants.map( restaurant => <RestaurantCards key={restaurant.info.id } resData = {restaurant}/>)
     
              }
            </div>
        </div>
    ) ; 
} ; 

export default Body ; 
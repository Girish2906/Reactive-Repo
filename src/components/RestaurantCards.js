import { CDN_URL } from "../utils/constants" ;


const RestaurantCards = (props) => {
    // console.log(props) ; 
    const {resData} = props ; 
    const {
      cloudinaryImageId , name , cuisines, avgRating , costForTwo , sla
    } = resData?.info ; 
    return (
        <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-300      hover:bg-gray-600 ">
            <img className="res-logo rounded-2xl" 
            // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/spt8neaxgdirvawt21al" />
            src = {CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-5 text-xl" >{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>

        </div>
    ) ; 
} ; 

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black   text-white  m-2   p-2   rounded-lg ">Is Open</label>
                <RestaurantCards  {...props} />            
            </div>
        )
    }
}

export default RestaurantCards ; 
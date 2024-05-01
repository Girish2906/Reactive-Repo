import ItemList from "./ItemList" ; 
import {useState} from "react" ; 

const RestaurantCategory = ({data , showItems , setShowIndex } ) => { 
    const handleClick = () => {
        setShowIndex() ; 
    }
    return (
       <div>
         <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-5 ">
           <div className="flex justify-between cursor-pointer "  onClick = {handleClick} >
                <span span className="font-bold text-lg" >{data.title  + " (" + data.itemCards.length + ")"} </span>
                <span>🔽</span>
           </div>
           {  showItems && <ItemList items = {data.itemCards} />}
        </div>
       </div>
    )
}

export default RestaurantCategory ; 




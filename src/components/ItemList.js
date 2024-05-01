import {RESTAURANT_DISH_URL} from "../utils/constants" ; 


const ItemList = ({items}) => {
    // console.log(items) ; 
    return (
        <div>
            {
                items.map( (item) => 
                     (
                       <div key = {item.card.info.id} className="py-2 m-2 border-gray-200 border-b-2 text-left   flex justify-between" >
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span className="text-3xl text-left">{item.card.info.name}</span>
                                    {/* <br /> */}
                                    <span> - ₹ {item.card.info.price/100}</span>
                                </div>
                                <p className="text-sm">{item.card.info.description}</p>
                                </div>
                            <div className="w-3/12 p-4">
                                <div className="absolute">
                                    <button className="p-2 mx-16 rounded bg-black text-white shadow-lg">Add +</button>
                                </div>  
                                    <img className="w-full" src={RESTAURANT_DISH_URL + item.card.info.imageId} alt="Dish image here" />
                            </div>
                       </div>
                    ) 
                )
            }
        </div>
    )
} ; 


export default  ItemList ; 
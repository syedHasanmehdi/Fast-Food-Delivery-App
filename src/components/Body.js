import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
 

const Body = () =>{

const [listOfRestaurant,setOfRestaurant] =useState([]);
const [filteredResturant,setfilteredResturant] =useState([]);

const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

const [searchText,setsearchText]=useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async () =>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

};

const onlineStatus=useOnlineStatus();

if(onlineStatus===false) return<h1> Look like You're Offline Check Your Internet Connection ! </h1>;

if(listOfRestaurant.length ===0){
    return <Shimmer/>
}

    return (
        <div className="body">
        <div className="flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button className="px-4 py-2 bg-green-100 hover:bg-green-300 rounded-lg m-4" onClick={()=>{
                    const filteredResturant = listOfRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                );
                setfilteredResturant(filteredResturant);
                }}
                >Search </button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-300 rounded-lg"
            onClick={() =>{
                const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRatingString > 4.3
                );
                setOfRestaurant(filteredList);
            }}
            >Top Rated Restaurant
            </button>
            </div>
        </div>
        <div className="flex flex-wrap">
            {filteredResturant.map((restaurant)=>(
                <Link key={restaurant.info.id} to=
                {"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.promoted? (
                        <RestaurantCardPromoted resData={restaurant}/>
                    ) :(
                        <RestaurantCard  resData={restaurant}/>
                    )}
                    </Link>
            ))}
        </div>
        </div>
    );
};

export default Body;
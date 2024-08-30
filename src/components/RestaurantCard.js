import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    const {resData}=props;

    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        slaString
    }=resData?.info;

    return(
        <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
            <img  
            className="rounded-lg" 
            alt="Briyani" 
            src={CDN_URL+ resData.info.cloudinaryImageId

            }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")} </h4>
            <h4>{avgRating} stars</h4>
            <h4>{slaString} Minutes </h4>
        </div>
    );
};

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
            <label>Promoted</label>
            <RestaurantCard{...props}/>
            </div>
        );
        };
};

export default RestaurantCard;
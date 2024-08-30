*#*#*#**# {HEADER}

1. first we make the header java script function
in which  we Return header tag in which we made  the block div logo and other block div home contact ul tag element.

2. In Header component we also import the constant.js file in which we have Logo_URL by importing constant.js file we use logo image

NOTE : LOGO_URL is just normal javascript function it will be in currly braces.

In last we export the Header component by export default Header

Now secondly we make *#*#*#**# {BODY Component} *#*#*#*#

1. In Body.js we first make the Body function or component in which we  return the body container.

2.In Body container we had made a button for Top Rated Resturant which help us to find the resturant which above 4 star rating.

const [listOfRestaurant,setOfRestaurant] =useState(resList);

return (

so we make one onclick funtion = {()=>{
    const filter list for top rated resturant = listofResturant.filter ((res) =>
      res.info.avgRatingString > 4);

      after this filter code we return the setofResturant in which we have  filter resturant  
                  setOfRestaurant(filteredList);
}}
> </button>

<div className="res-container">
            {listOfRestaurant.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
);
     

     bascially in this res-conatiner we map the list of resturant (resturant) =>(
        with the resturant card component  we also give a key in which every resturant have unique id .
     )




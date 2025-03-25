import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestrurant, setListOfRestrurant] = useState(resObj);
  const [filteredList, setFilteredList] = useState(resObj);
  const [searchText, setsearchText] = useState("");

  //Whenever the state updates react triggeres reconciliation cycle(Re-renderes the component)
  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6021125407737&lng=73.7837773984501&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // const cards = json.data.cards;
    // console.log(cards);
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setListOfRestrurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
    // const fetchedRestaurants = cards[2]?.card?.card;
    // setListOfRestrurant([]);
  };

  //Conditional Rendering

  // if (listOfRestrurant === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestrurant === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRestro = listOfRestrurant.filter(
                // (res) => res.name === searchText()
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestrurant(filteredRestro);
              setFilteredList(filteredRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestrurant.filter(
              //filter logic here
              (res) => res.rating > 4
            );
            setListOfRestrurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info?.id || index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

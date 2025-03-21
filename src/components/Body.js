import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestrurant, setListOfRestrurant] = useState(resObj);

  //Normal js variable
  //   let listOfRestrurantJs = [
  //     {
  //       id: 1,
  //       image: "https://wallpaperaccess.com/full/767054.jpg",
  //       name: "Meghana Foods",
  //       cuisines: ["Biryani", "North Indian", "Asian"],
  //       rating: 3.8,
  //       time: 38,
  //     },
  //     {
  //       id: 2,
  //       image:
  //         "https://thumbs.dreamstime.com/b/roasted-meatballs-french-fries-vegetable-salad-71420439.jpg",
  //       name: "KFC",
  //       cuisines: ["Fast Food", "Chicken", "American"],
  //       rating: 4.5,
  //       time: 30,
  //     },
  //     {
  //       id: 3,
  //       image:
  //         "https://thumbs.dreamstime.com/b/roasted-meatballs-french-fries-vegetable-salad-71420439.jpg",
  //       name: "MCD",
  //       cuisines: ["Fast Food", "Chicken", "American"],
  //       rating: 4.1,
  //       time: 30,
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
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
        <div className="res-container">
          {/* {resObj.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))} */}
          '
          {listOfRestrurant.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
          '
        </div>
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 * ---Logo
 * ---Nav Items
 * Body
 * ---Search
 * ---RestaurantCard
 * -----img
 * -----Name of Res ,Star Rating,cuisine, Delevery time
 * Footer
 * ---Copyright
 * ---Links
 * ---Address
 * ---Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={resData.image} alt={resData.name} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>{" "}
      {/* Join cuisine array into string */}
      <h4>{resData.rating} Stars</h4>
      <h4>{resData.time} minutes</h4>
    </div>
  );
};

const resObj = [
  {
    id: 1,
    image: "https://wallpaperaccess.com/full/767054.jpg",
    name: "Meghana Foods",
    cuisines: ["Biryani", "North Indian", "Asian"],
    rating: 4.4,
    time: 38,
  },
  {
    id: 2,
    image:
      "https://thumbs.dreamstime.com/b/roasted-meatballs-french-fries-vegetable-salad-71420439.jpg",
    name: "KFC",
    cuisines: ["Fast Food", "Chicken", "American"],
    rating: 4.5,
    time: 30,
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/OIP.fBe1gguUHhEyZuradl-J6QAAAA?rs=1&pid=ImgDetMain",
    name: "Pizza Hut",
    cuisines: ["Italian", "Pizza", "Fast Food"],
    rating: 4.2,
    time: 40,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
    name: "The Indian Kitchen",
    cuisines: ["Indian", "Vegetarian", "Traditional"],
    rating: 4.8,
    time: 25,
  },
  {
    id: 5,
    image:
      "https://th.bing.com/th/id/OIP.SvOrBKShWFObYOqaP1MyNAHaD9?w=315&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Burger King",
    cuisines: ["Fast Food", "Burgers", "American"],
    rating: 4.1,
    time: 20,
  },
  {
    id: 6,
    image:
      "https://th.bing.com/th/id/OIP.lEa60MoPEz7kNWZQBc_a3wHaEo?rs=1&pid=ImgDetMain",
    name: "Sushi World",
    cuisines: ["Japanese", "Sushi", "Asian"],
    rating: 4.7,
    time: 45,
  },
  {
    id: 7,
    image:
      "https://th.bing.com/th/id/OIP.liqh8Q8jHp4f8UcNwXNNuwHaEo?w=216&h=186&c=7&r=0&o=5&pid=1.7",
    name: "Pasta Palace",
    cuisines: ["Italian", "Pasta", "Vegetarian"],
    rating: 4.3,
    time: 30,
  },
  {
    id: 8,
    image:
      "https://th.bing.com/th/id/OIP.qcGu4nx1n-BgdM_tQV8w2wHaE8?w=230&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Taco Bell",
    cuisines: ["Mexican", "Fast Food", "Burritos"],
    rating: 4.0,
    time: 15,
  },
  {
    id: 9,
    image:
      "https://th.bing.com/th/id/OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_?w=267&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Café Coffee Day",
    cuisines: ["Cafe", "Coffee", "Snacks"],
    rating: 4.2,
    time: 10,
  },
  {
    id: 10,
    image:
      "https://th.bing.com/th/id/OIP.iPp75BQZaZqPiMJc_2sPPgHaE8?w=264&h=180&c=7&r=0&o=5&pid=1.7",
    name: "The Pizza Company",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    rating: 4.3,
    time: 35,
  },
  {
    id: 11,
    image:
      "https://th.bing.com/th/id/OIP.QLS7ZvewhLUGgptgjuyz0wHaEo?w=288&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Olive Garden",
    cuisines: ["Italian", "Pasta", "Vegetarian"],
    rating: 4.6,
    time: 50,
  },
  {
    id: 12,
    image:
      "https://th.bing.com/th/id/OIP.LEOA5xYfDymvhql3HXqRHQHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Chipotle Mexican Grill",
    cuisines: ["Mexican", "Burritos", "Fast Food"],
    rating: 4.4,
    time: 25,
  },
  {
    id: 13,
    image:
      "https://th.bing.com/th/id/OIP.a5Lnio_0m6ytkxOSYHYrFAHaE8?w=184&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Mamma Mia!",
    cuisines: ["Italian", "Pizza", "Pasta"],
    rating: 4.7,
    time: 40,
  },
  {
    id: 14,
    image:
      "https://th.bing.com/th/id/OIP.te9gPiD8UiUZ0XQ1qcAjEAHaEL?w=273&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Nando's",
    cuisines: ["Portuguese", "Grill", "Chicken"],
    rating: 4.6,
    time: 35,
  },
  {
    id: 15,
    image:
      "https://th.bing.com/th/id/OIP.xfNu5wGsLc7swgTM4g4P7wHaEO?w=234&h=180&c=7&r=0&o=5&pid=1.7",
    name: "Sushi Samba",
    cuisines: ["Japanese", "Sushi", "Fusion"],
    rating: 4.8,
    time: 50,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <div className="res-container">
          {resObj.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //render functional component

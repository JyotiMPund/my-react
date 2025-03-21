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

export default RestaurantCard;

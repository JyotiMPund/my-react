import { CDN_URL } from "../utils/contants";
const RestaurantCard = ({ resData }) => {
  // Directly destructure resData from props
  const {
    cloudinaryImageId = "",
    name = "",
    avgRating = 0,
    costForTwo = 0,
    sla = 0,
  } = resData?.info || {};
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {cloudinaryImageId && (
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      )}
      <h3>{name}</h3>
      {/* <h4>{resData.cuisines.join(", ")}</h4>{" "} */}
      {/* Join cuisine array into string */}
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;

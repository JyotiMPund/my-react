import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/contants";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
  const [resinfo, setResinfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("apidata.............................", json);
    setResinfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  // const { itemsCard } =
  //   resinfo?.cards[4]?.cards[1]?.card?.card?.itemsCards?.name;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines}-{costForTwoMessage}
      </p>
      <h2>
        {resinfo.cards[2].card.card.info.sla.minDeliveryTime} -
        {resinfo.cards[2].card.card.info.sla.maxDeliveryTime}
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs."}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;

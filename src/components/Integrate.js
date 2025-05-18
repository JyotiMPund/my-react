import Axios from "axios";
import { useState } from "react";

const Integrate = () => {
  const [joke, setJoke] = useState([]);
  const getData = () => {
    Axios.get("https://official-joke-api.appspot.com/jokes/ten").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <button onClick={getData}>Click for the joke</button>
    </div>
  );
};

export default Integrate;

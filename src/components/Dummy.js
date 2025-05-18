import { useEffect, useState } from "react";

const Dummy = () => {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter((prev) => prev + 1);
  };

  const handleCount2 = () => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    fetchResto();
  }, []);

  const fetchResto = async () => {
    try {
      const res = await fetch("https://www.zomato.com/webroutes/auth/init");
      const json = await res.json();
      console.log("Fetched data:", json);
      console.log("data...........", json.selected_country_code.name);
      if (json.selected_country_code.name) {
        setCode(json.selected_country_code.name);
      } else {
        setCode("No data available");
      }
    } catch (error) {
      console.log("fetch error ", error);
    }
  };

  return (
    <div>
      <h1> Dummy page</h1>
      <h2>{code}</h2>
      <h1>count:{counter}</h1>
      <button onClick={handleCount}>increament</button>
      <button onClick={handleCount2}>decreament</button>
    </div>
  );
};

export default Dummy;

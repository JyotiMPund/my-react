import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
const PostList = () => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    fetcData();
  }, []);

  const fetcData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    setShowData(json);
  };
  return (
    <div>
      <ul>
        {showData.map((res) => (
          <li key="res.id">{res.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;

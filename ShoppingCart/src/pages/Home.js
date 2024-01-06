import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [posts, setposts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setposts(data);
    } catch (er) {
      console.log("errrorr");
      setposts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="absolute top-[50%] left-[50%] ">

        <Spinner /> 

        </div>
      ) : posts.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-5xl p-2 mx-auto min-h-[80vh] space-y-10 space-x-5 ">
          {posts.map((post) => (
            <Product post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <div
          className=" flex 
        justify-center items-center"
        >
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Home;

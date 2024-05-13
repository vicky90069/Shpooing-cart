import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"; 
import Product from "../components/Product"; 

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } 
    catch (error) {
      console.error("Error fetching product data:");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Home;

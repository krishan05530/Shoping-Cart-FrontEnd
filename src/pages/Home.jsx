import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log("data is");
      console.log(data);
      // now poat has all data
      setPosts(data);
      console.log("post value is");
      console.log(posts);
    }
    catch (error) {
      console.log("error aagya he");
      setPosts([]);
    }
    setLoading(false);
  }

  // its calling this fuction only at starting 
  useEffect(() => {
    fetchProductData();
  }, [])

  console.log("post length is");
  console.log(posts.length);

  return (
    <div>
      {
    
      loading ? <Spinner /> :
      posts.length >0 ?
      ( <div className="  grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space -y-10 space-x-5 min-h-[80vh]"> 
        {
       posts.map((post)=>(
       <Product key ={post.id} post={post}/>
       ))  
        }
            
        </div>):
      <div className="flex justify-center items-center">
        <p>No data found</p>
      </div>
      }
    </div>
  );
};

export default Home;

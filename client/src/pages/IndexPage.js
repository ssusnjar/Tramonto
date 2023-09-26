import Post from "../Post";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrangeSection from "../pages/components/OrangeSection/OrangeSection";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <OrangeSection
        title="PONUDA PUTOVANJA"
        description="Sve avanture na jednom mjestu"
      />
      <div className="toCenter">
        <Link to="/create">
          <button className="CreateBtn">Create new post</button>
        </Link>
      </div>
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </>
  );
}

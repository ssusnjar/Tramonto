import React from "react";
import styles from "./Blog.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className={styles.Blog}>
      <OrangeSection
        title="BLOG"
        description="Sve zanimljivosti na jednom mjestu"
      />
      <Link to="/create">Create new post</Link>
      <div className={styles.Main}>
        <div className={styles.blogGrid}>
          {posts.length > 0 && posts.map((post) => <Post {...post} />)}

          <div className={styles.leftColumn}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
          <div className={styles.rightColumn}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>
      </div>
    </div>
  );
}

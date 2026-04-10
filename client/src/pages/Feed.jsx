import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => setPosts(res.data.post));
  }, []);

  return (
    <div className="feed">
      <button onClick={() => navigate("/create-post")}>Create Post</button>
      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div className="post-section" key={posts._id}>
                <img
                  id="post-section--image"
                  src={post.image}
                  alt="post-image"
                />
                <p id="post-section--caption">{post.caption}</p>
              </div>
            );
          })
        ) : (
          <p id="no-post">No Posts available!</p>
        )}
      </section>
    </div>
  );
};

export default Feed;

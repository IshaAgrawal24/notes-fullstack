import React from "react";
import axios from 'axios';
import "./pages.css";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log(formData);

    axios
      .post("http://localhost:4000/create-post", formData)
      .then((res) => {
        console.log("response::",res)
        alert("Post created successfully.");
        e.target.reset();
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        alert("Cannot create post");
      });
  };

  return (
    <div className="create-post">
      <section className="createPost--section">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="Upload Image"
            required
          />
          <input
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
            required
          />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default CreatePost;

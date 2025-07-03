import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./GetJob.css"; // Import CSS for styling

export default function GetJob() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("http://localhost:8080");

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, [url]);

  useEffect(() => {
    fetchPost();
  }, [url, fetchPost]);

  const goSearch = async (e) => {
    const searchText = e.target.value;
    setText(searchText);
    setUrl(`http://localhost:8080/${searchText}`);
  };

  return (
    <div className="getjob-container">
      <button className="btn-home" onClick={() =>{navigate("/")}}>
        Home
      </button>

      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Search for jobs..."
            value={text}
            onChange={goSearch}
            className="search-input"
          />
        </form>
      </div>

      <div className="jobs-container">
        {post.length > 0 ? (
          post.map((e, index) => (
            <Card
              key={index}
              profile={e.profile}
              description={e.description}
              experience={e.experience}
              tech={e.tech}
            />
          ))
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </div>
    </div>
  );
}

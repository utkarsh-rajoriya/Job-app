import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hire.css";

export default function Hire() {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    profile: "",
    description: "",
    experience: 0,
    tech: [],
  });
  const [techInput, setTechInput] = useState(""); // Temporary state for tech input

  // Handle form input changes for profile, description, and experience
  let handleOnchange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  // Handle adding a technology to the array
  let handleAddTech = () => {
    if (techInput && !detail.tech.includes(techInput)) {
      // Prevent duplicates
      setDetail((prevDetail) => ({
        ...prevDetail,
        tech: [...prevDetail.tech, techInput], // Add tech to the array
      }));
      setTechInput(""); // Clear the input after adding
    }
  };

  // Handle removing a technology from the array
  let handleRemoveTech = (index) => {
    const updatedTech = detail.tech.filter((_, i) => i !== index);
    setDetail({ ...detail, tech: updatedTech });
  };

  let sendData = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set correct Content-Type as JSON
      },
      body: JSON.stringify(detail), // Send the form data as JSON
    });

    const result = await response.json(); // Handle response as JSON
    console.log(result);
  };

  const redirect_home = () => {
    window.location.href = "http://localhost:3000/";
  };
  return (
    <>
      <div className="hire-container">
        <button className="btn btn-secondary mb-4" onClick={() =>{navigate("/")}}>
          HOME
        </button>

        <div className="form-container">
          <form>
            <h2 className="form-heading">Hire New Talent</h2>

            <div className="mb-3">
              <label htmlFor="profile" className="form-label">
                Profile
              </label>
              <input
                type="text"
                className="form-control"
                id="profile"
                name="profile"
                value={detail.profile}
                onChange={handleOnchange}
                placeholder="Enter job profile"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={detail.description}
                onChange={handleOnchange}
                rows="3"
                placeholder="Enter job description"
              ></textarea>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="experience" className="form-label">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="experience"
                  name="experience"
                  value={detail.experience}
                  onChange={handleOnchange}
                  placeholder="Enter required experience"
                />
              </div>

              <div className="col">
                <label htmlFor="tech" className="form-label">
                  Technologies
                </label>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    placeholder="Add a technology"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={handleAddTech}
                  >
                    Add Technology
                  </button>
                  <ul className="list-group mt-3">
                    {detail.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {tech}
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveTech(index)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={sendData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

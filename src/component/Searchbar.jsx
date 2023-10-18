import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    event.target.value = "";
  };

  return (
    <form
      className="search-bar"
      style={{
        display: "flex",
        background: "#FFFFFF",
        height: "1.7rem",
        width: "100%",
        alignItems: "center",
        paddingLeft: "15px",
        borderRadius: "24px",
      }}
      onSubmit={handleSubmit}
    >
      <FiSearch />
      <input
        name="name"
        style={{
          backgroundColor: "#FFFFFF",
          border: "none",
          width: "7rem",
        }}
        type="text"
        placeholder="  Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;

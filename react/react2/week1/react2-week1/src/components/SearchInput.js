import React, { useContext } from "react";
import { UserContext } from "./SearchUser";
import { FaSearch } from 'react-icons/fa';

function SearchInput() {
  const input = useContext(UserContext);
  return (
    <>
     <label className="searchIcon" htmlFor="search">
    <FaSearch color="lightgrey" size={25}/>
    </label>
    <input
    id="search"
    type="text"
    className="search-bar"
    value={input.debouncevaluen}
    onChange={event => input.setInputValue(event.target.value)}
    placeholder="Search for user"
    required>
      </input>
    </>
    );
}

export default SearchInput;

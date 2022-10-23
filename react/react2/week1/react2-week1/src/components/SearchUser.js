import React, { useState, useEffect, createContext } from "react";
import UserList from "./UserList";
import UserRepoList from "./UserRepoList";
import SearchInput from "./SearchInput";
import { useDebounce } from 'use-debounce';

export const UserContext = createContext();
function SearchUser() {
  const [username, setUsername] = useState([]);
  const [repos, setRepos] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query] = useDebounce(inputvalue, 100);


  useEffect(() => {
    if(query !== ""){
    setLoading(true);
     fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data.items);
        setLoading(false);
      })
      .catch(err => {
        setError("error");
      })};
  }, [query]);

  return (
    <>
      <UserContext.Provider
        value={{ username, repos, setRepos, inputvalue, setInputValue, loading, error }}
      >
        <SearchInput />
        <UserList />
        <UserRepoList />
      </UserContext.Provider>
    </>
  );
}

export default SearchUser;
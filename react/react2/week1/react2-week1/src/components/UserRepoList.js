import React, { useEffect, useContext } from "react";
import { UserContext } from "./SearchUser";

const UserRepoList = () => {
  const name = useContext(UserContext);
  const repoUrl = "https://api.github.com/users/HackYourFuture-CPH/repos";
  useEffect(() => {
    fetch(repoUrl)
      .then((res) => res.json())
      .then((data) => name.setRepos(data));
  });
  return (
  <>
      <h1>HackYourFuture-CPH Repos</h1>
      <ul> 
        {name.repos &&
          name.repos.map((repo) => (
            <div className="row">
            <div className="column">
            <li> {repo.name}</li>
             </div>
            </div>
          ))}
      </ul>
    </>
  );
};

export default UserRepoList;
import React, { useContext } from "react";
import { UserContext } from "./SearchUser";

function UserList() {
  const name = useContext(UserContext);

  return (
    <>
      <div>
    { name.loading ? "Loading" : ""}
    <br />
    { name.inputvalue === undefined 
      ? "No Resualt"
      : name.username.map(item => 
        <li key={item.id}> 
        {item.login}
        <br/> 
        <img
         src={item.avatar_url}
          alt={`${item.login}`}
           className="user"
              />
        </li>
       )
    }
      </div>
      </>
  );
}

export default UserList;
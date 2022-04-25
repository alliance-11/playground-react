import React from "react";

export const HW72 = ( props ) => {
  
  console.log("Props: ", props)

  const user = props.user

  console.log("User: ", user)
  return (
    <div>
      <div key={user.id}>
        {user.firstname} {user.lastname} {user.age} {user.email} 
        {/* {user.password} */}
      </div>
    </div>
  );
};
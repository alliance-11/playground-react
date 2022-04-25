import UserItem from "./UserItem";

const UserList = ({ users, updateUser }) => {

  // Loop over users and render a User component for each one 
  return (
    <div className="user-list">
      {users.map((user) => {
        return <UserItem key={user.id} user={user} updateUser={updateUser}></UserItem>
      })}
    </div>
  )
}
 
export default UserList;
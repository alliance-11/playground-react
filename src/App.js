import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {

  // STATE
  const [users, setUsers] = useState([
    { id: "1", username: "Gael", age: 28 },
    { id: "2", username: "Edward", age: 39 },
  ])

  // UPDATE user
  const updateUser = (id, userData) => {
    
    // 1. updated array
    const updatedUsers = users.map(user => user.id === id ? { ...user, ...userData } : user)
    console.log( { updatedUsers })
    setUsers( updatedUsers )
  }

  // HTML
  return (
    <div className="App">
      <header className="App-header">
        <h2>Edit Training List</h2>
        <UserList users={users} updateUser={updateUser}></UserList>
      </header>
    </div>
  )
}

export default App;

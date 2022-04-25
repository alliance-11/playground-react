import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  // STATE
  const [user, setUser] = useState({
    username: "Gael",
    age: 28
  })

  // REFs
  const inputUsername = useRef()
  const inputAge = useRef()

  // TOGGLE TRICK => !bool
  const [editMode, setEditMode] = useState(false)

  // useEffect is triggered whenever a state was CHANGED
  useEffect(() => {
    console.log("[UseEffect Hook] SOME STATE was CHANGED in our App")
    console.log( { user } )
    console.log( { editMode } )
  })

  // this here is executed whenever the user types a key in the input field
  const onKeyDown = (ev) => {

    // user typed ENTER
    if (ev.key === "Enter") {

      // show what is in ALL INPUT fields
      console.log( "Username Value: ",  )
      console.log( "Age Value: ",  )

      const usernameNew = inputUsername.current.value
      const ageNew = inputAge.current.value

      console.log("Input value:")
      console.log("Speichere den Change! SOFORT!")

      // update field USERNAME in the user object
      setEditMode(false) // make readonly after change      
      setUser({ ...user, username: usernameNew, age: ageNew })
    }
  }

  // HTML
  return (
    <div className="App">
      <header className="App-header">
        <h2>Edit Training</h2>
        <div>
          <input
            name="username"
            // attach a REF variable to this input field 
            ref={ inputUsername }
            onKeyDown={onKeyDown}
            defaultValue={user.username}
            // set input readonly if we are NOT in edit mode
            readOnly={!editMode}
          />
          <input
            name="age"
            ref= { inputAge }
            onKeyDown={onKeyDown}
            defaultValue={user.age}
            readOnly={!editMode}
          />
          <button onClick={() => setEditMode(!editMode)}>Toggle Edit</button>
        </div>
      </header>
    </div>
  )
}

export default App;

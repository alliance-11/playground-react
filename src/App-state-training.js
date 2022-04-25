import { useState } from 'react';
import './App.css';

function App() {

  // useState training camp

  // update number
  const increaseNumber = () => {
    console.log("Increase Number called...")
    setNumber( number + 1 )
  }

  // update string (=message)
  const updateMessage = () => {
    console.log("Update Message called...")
    let messageNew = "hallo"
    setMessage( messageNew )
  }

  const updateOnlineStatus = () => {
    console.log("Update Online status called...")

    console.log( "!true", !true )
    console.log( "!false", !false )

    setOnline( !online  ) // toggle boolean variable online (if true => false, if false => true)
    // setOnline( online ? false : true  )
  }


  // toggle Admin status => if admin true => false und umgekehrt
  const updateUserRole = () => {
    console.log("Update User status")
    // user.admin = false // does not work to update object directly!

    // toggle admin status
    const userUpdate = { ...user, admin: !user.admin }

    setUser( userUpdate ) // setXXX => überschreibt alte Daten komplett!
  }

  const updateUserName = (event) => {
    console.log("Update user name")

    const usernameTyped = event.target.value

    console.log( usernameTyped )
    setUsername( usernameTyped )
  }

  // button was clicked 
  // update username in user object ! 
  const updateUserObjectName = () => {
    console.log("Updating username in object")

    setUser( { ...user, name: username } )
  }

  // user object
  // const user = { name: "Eliza", admin: true }
  // const [ user, setUser ] = useState({ name: "Eliza", admin: true }) 

  // number
  const [ number, setNumber] = useState( 0 )

  // INPUT field state
  const [ username, setUsername ] = useState("") 


  // string
  const [ message, setMessage ] = useState("hey")

  // boolean (true / false)
  const [ online, setOnline ] = useState( true )

  // array (will follow....)


  return (
    <div className="App">
      <header className="App-header">
        <h2>UseState Training camp</h2>

        {/* Update SIMPLE values (number, string, boolean) */}
        <div onClick={ increaseNumber } >Number: { number } </div>
        <div onClick={ updateMessage  }>String: { message } </div>
        <div onClick={ updateOnlineStatus } >Online: { online ? "Ja" : "Nein" }</div>

        {/* Update OBJECT field => Change role von Admin zu User  */}
        <div onClick={ updateUserRole } >Object:  { user.name } {user.admin ? "Admin" : "User" } </div>

        {/* Update OBJECT field by Input Field
          Save INPUT from user in a STATE
          On Click => overwrite the name of the user OBJECT with the data from INPUT field (stored n state "username")
        */}
        <div>
          <input type="text" name="username" value={ username } onChange={ updateUserName  } />
          <button onClick={ updateUserObjectName }>Update name</button>
        </div>

      </header>
    </div>
  );
}

export default App;

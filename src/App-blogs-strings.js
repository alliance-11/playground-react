import { useState } from "react";

const App = () => {

  const [blogs, setBlogs] = useState(["Blog 1", "Blog 2", "Blog 3", "Blog 4" ])
  const [blogNew, setBlogNew] = useState("") // INPUT STATE

  console.log(blogNew)

  // reacted auf BUTTON CLICK => ADD des Users
  const addNewBlogToArray = () => {
    // blogs.push("Gael")
    setBlogs([...blogs, blogNew]) // copy all items from previous array and ADD a new one 
  }

  // reacted auf TYPING des Users
  const onNewBlogChange = (event) => {
    // user hat getippt => aber wo ist es?
    setBlogNew( event.target.value)
  }

  // map DATA array to HTML array
  const arrBlogsHTML = blogs.map( (blog) => {
    return <div key={blog}>{ blog }</div> // convert EACH data object into HTML
  })

  // JSX SNIPPETS
  // PizzaList.jsx
  const divBlogs = (
    <div className="blogs">
      { arrBlogsHTML }
    </div>    
  );

  // JSX (=> LAYOUT)
  return (
    <div>
      <h2>Blog posts</h2>
      { divBlogs }
      {/* INPUT STATE */}
      <input value={ blogNew } onChange={  onNewBlogChange }  />
      <button onClick={ addNewBlogToArray }>Add Gael</button>
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {

  const [blogs, setBlogs] = useState([
    { id: "1", title: "Blog 1", author: "Gael"}, 
    { id: "2", title: "Blog 2", author: "Rob"},
    { id: "3", title: "Blog 3", author: "Gael"},
    { id: "4", title: "Blog 4", author: "Eliza"} 
  ])
  const [blogTitleNew, setBlogTitleNew] = useState("") // INPUT STATE
  const [blogAuthorNew, setBlogAuthorNew] = useState("")

  console.log( blogs )

  // map DATA array to HTML array
  const arrBlogsHTML = blogs.map( (blog) => {
    return <div key={blog.id}>{ blog.title } von { blog.author }</div> // convert EACH data object into HTML
  })


  // reacted auf BUTTON CLICK => ADD des Users
  const addNewBlogToArray = () => {
    // blogs.push("Gael")
    const newId = Date.now().toString()
    const newBlog = {  id: newId, title: blogTitleNew, author: "Gael" }
    setBlogs([...blogs, newBlog ]) // copy all items from previous array and ADD a new one 
  }

  // reacted auf TYPING des Users
  const onTitleChange = (event) => {
    // user hat getippt => aber wo ist es?
    setBlogTitleNew( event.target.value)
  }

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
      <input value={ blogTitleNew } onChange={  onTitleChange }  />
      <input value={ blogAuthorNew } onChange={  onAuthorChange }  />
      <button onClick={ addNewBlogToArray }>Add Blog</button>
    </div>
  );
};

export default App;

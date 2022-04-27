import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import axios from 'axios'
import {Router,Link,navigate} from '@reach/router'
import Update from './views/Update';
import {useState,useEffect} from 'react'
import AuthorForm from './components/AuthorForm';
import List from './components/List'
function App() {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]); 
  useEffect(()=>{
      axios.get('http://localhost:8000/api/authors')
          .then(res=>{
              setAuthors(res.data);
              setLoaded(true);
          })
          .catch(err => console.error(err));
  },[authors]);

  const createAuthor = author => {
    axios.post('http://localhost:8000/api/authors', author)
        .then(res=>{
            setAuthors([...authors, res.data]);
            errors.length>0?console.log("sorry"):
            navigate("/")
        })
          .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
       
}


  return (
    <div className="App">
      
 <Link to="/new" >Add a new author</Link>  
 {errors.map((err, index) => <p key={index}>{err}</p>)}
<Router>
  <AuthorForm path="/new" initialName="" onSubmitProp={createAuthor} errors={errors}/>
  <Main path="/"/>
  <Update path="/edit/:id"/>
</Router>
    </div>
  );
}

export default App;

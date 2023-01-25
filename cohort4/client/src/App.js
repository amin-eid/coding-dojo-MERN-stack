import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update'
import AuthorForm from './components/AuthorForm'
function App() {
  return (
    <div className="App">
    <Router>
        <Main path="/"/>
        <Detail path="/:id"/>
        <Update path="/authors/:id/edit"/>
        <AuthorForm path="/authors/new"/>
        </Router>
    </div>
  );
}
export default App;

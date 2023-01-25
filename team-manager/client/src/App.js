import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update'
import AuthorForm from './components/TeamForm'
function App() {
  return (
    <div className="App">
    <Router>
        <Main path="/"/>
        <Detail path="/:id"/>
        <Update path="teams/:id/edit"/>
        <AuthorForm path="teams/new"/>
        </Router>
    </div>
  );
}
export default App;

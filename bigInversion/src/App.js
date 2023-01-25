import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
<PersonCard firstName="Doe"copy lastName="Jone" age={ 45 } hairColor="Black" />
<PersonCard firstName="John"copy lastName="Smith" age={ 88 } hairColor="Brown" />
<PersonCard firstName="Millard"copy lastName="Fillmore" age={ 50 } hairColor="Brown" />
<PersonCard firstName="Maria"copy lastName="Smith" age={ 62 } hairColor="Brown" />
    </div>
  );
}

export default App;

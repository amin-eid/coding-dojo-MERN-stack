import {navigate} from "@reach/router";
const {useState} = require("react");

const SearchForm = () => {
    const choices = ["people", "planets", "starships"];
    const [selectedElement, setSelectedElement] = useState(choices[0]);
    const [id, setId] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        navigate("/" + selectedElement + "/" + id);
        setId("");
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <br/>
            <label>Search for: </label>
            <select value={ selectedElement } onChange={e => setSelectedElement(e.target.value)}>
                { choices.map( (item, index) => <option key={index} value={item}>{item}</option>) }
            </select>
            <label>ID: </label>
            <input type={"text"} onChange={ e => setId(e.target.value) } value={id}/>
            <input type={"submit"} value={"Search"}/>
        </form>
    );
};

export default SearchForm;
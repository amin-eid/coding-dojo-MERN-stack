import React,{Component} from 'react'
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            clickedAge:props.age
        }
    }
    birthDayAge =()=>{
        this.setState({clickedAge:this.state.clickedAge +1})
    }
    render() {
        const { firstName, lastName,color } = this.props;
        return (
            <div>
                <h1>{ lastName} , { firstName }</h1>
                <h3>Age: {this.state.clickedAge}</h3>
                <h3>Hair Color: {color}</h3>
                <button onClick={this.birthDayAge}>Birthday Button for { firstName } { lastName}</button>
            </div>
        );
    }
}
export default PersonCard
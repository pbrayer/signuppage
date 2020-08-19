import React from "react";
import "./index.css";

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
        username: "",
        email: "",
        name: ""
    }

    this.updateInput = this.updateInput.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

 }

    handleClearForm(){
     this.setState((currentState) => {
                return{
                 username: "",
                 email: "",
                 name: ""
                }
            }
            )
    }

   updateInput(e){
       const value = e.target.value

       this.setState({
           [e.target.id]: value
       })
   }

render(){

  return (
  <div className = "container">
     <svg className="bi bi-hammer" width="9em" height="9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.812 1.952a.5.5 0 01-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 01-.146.354L3.425 7.853a.5.5 0 01-.708 0L.146 5.274a.5.5 0 010-.706l1.286-1.29a.5.5 0 01.354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 012.077.782l.178.129z"/>
    <path fillRule="evenodd" d="M6.012 3.5a.5.5 0 01.359.165l9.146 8.646A.5.5 0 0115.5 13L14 14.5a.5.5 0 01-.756-.056L4.598 5.297a.5.5 0 01.048-.65l1-1a.5.5 0 01.366-.147z" clipRule="evenodd"/>
     </svg>
  <h1>Sign Up</h1>
  <input type = "text" placeholder = "name" id = "name" value= {this.state.name} onChange = {this.updateInput}/><br/>
  <input type = "text" placeholder = "username" id = "username" value= {this.state.username} onChange = {this.updateInput}/><br/>
  <input type = "email" placeholder = "email" id = "email" value= {this.state.email} onChange = {this.updateInput}/><br/>

  <button onClick = {this.handleClearForm}>Clear All</button>
  <button>Create Account</button>
  </div>
 
  
    )

    }
     };

export default SignUpForm;

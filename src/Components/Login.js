import './App.css';
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";


export default class App extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  




  responseFacebook = response => {
    // console.log('LOGIN CLICKED')

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
     picture: response.picture.data.url
    });
  };
  
  componentClicked = () => console.log("clicked");
  
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      
      fbContent = (
        <div
          style={{
            width: "210px",
            height:"50px",
            margin: "auto",
            background: "	#b7b9ff",
            padding: "10px"
          }}
        >

          <img src={this.state.picture} alt={this.state.name} />
          <div className="username"><h3>Welcome {this.state.name}</h3>
          </div>
       </div>
      );
    } else {
      
      fbContent = (
        <FacebookLogin
          appId="1021372718401293"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
        
      );
    }

    return <div className="loginButton">{fbContent}
    
    
    </div>
  }
}
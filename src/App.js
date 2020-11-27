import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log( "Login Result" ,response);
}
const componentClicked=(data)=>{
  console.warn(data)
}
class App extends React.Component{
  render(){
    return(
      <div><h1>Login with facebook</h1>
      <FacebookLogin
      appId="1021372718401293"
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />
      </div>
    )
  }
}

export default App;

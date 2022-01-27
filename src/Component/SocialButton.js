import React from "react";
import SocialLogin from "react-social-login";
import {Redirect} from 'react-router-dom';

class SocialButton extends React.Component {
  render() {
    
      //   super();
      //   this.state = { 
      //     name:aminu
      //   };
      
    
      // // gotoURL(usr){
      // //   let url = `/user/${usr}`;
      // //   //console.log(url);
      // //   return <Redirect to={'http://localhost:3000'}/>
      // //   }

    const { children, triggerLogin, ...props } = this.props;
    return (
      <button onClick={triggerLogin}{...props}>
        {children}
      </button>
    );
  }
  }



export default SocialLogin(SocialButton);
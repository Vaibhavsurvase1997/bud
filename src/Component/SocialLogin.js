import React from 'react'
import SocialButton from "./SocialButton";

export default function SocialLogin() {
    const handleSocialLogin = (user) => {
        
        console.log(user);
      };
      
      const handleSocialLoginFailure = (err) => {
        console.error(err);
      };
    return (
        <div>
            <h2>Social Login</h2>
            <SocialButton
      provider="facebook"
      appId="1711821862348166"
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton>
    <SocialButton
      provider="google"
      appId="864663012776-ik7nnat91r3f4rvguqd57o6jgofgdg01.apps.googleusercontent.com"

      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Gmail
    </SocialButton>
        </div>
    )
}

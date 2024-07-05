import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegisterForm';
// import { useAuth0 } from "@auth0/auth0-react";


const App = () => {

//   const { user, isAuthenticated, isLoading } = useAuth0();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

   

  return (
    <>
    <div>
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
    </div>
    
      </>
  );
};

export default App;

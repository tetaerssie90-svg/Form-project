import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  function signUp (formData) {
    const email = formData.get("email")
    console.log(email)

    const password = formData.get("password")
    console.log(password)


  }
  return (
    <section>
      <h1>Signup</h1>

      <form  action={signUp}>
        
        <label htmlFor="email">Email:</label>
             
             <input id="email" type="email" name="email" placeholder="teta90@gmail.com"/>
              
              <br/>

              <label htmlFor="password">Password:</label> 
              <input id="password" type="password" name="password"/>  
              <br/>

              <button>Submit</button>     
      </form>


    </section>
  )
}

export default App;

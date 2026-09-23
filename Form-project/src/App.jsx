import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section>
      <h1>Signup</h1>

      <form>
        
        <label htmlFor="email">Email:</label>
             
             <input id="email" type="email" name="email" placeholder="teta90@gmail.com"/>
              
              <br/>

              <label htmlFor="password">Password:</label> 
              <input id="password" type="password" name="password"/>       
      </form>


    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
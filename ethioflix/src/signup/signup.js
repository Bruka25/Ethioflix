import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div>
       <h1>Sign Up</h1>
    <form action="/flix_signup" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        <br/>
        <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}

export default Signup

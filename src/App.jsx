import React from 'react'
// const inputValue = prompt("Enter your name:");
// let name = 'Mohit';
const loggedin = true;
const App = () => {
  return (
    <>
    <h1 className=' font-serif bg-emerald-300 flex justify-center items-center w-full h-52 text-9xl
    '>Hello  &nbsp; { loggedin ? <h1>Member</h1> : <h1>Guest</h1>}</h1>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore'

function App() {

  const actors = ['Shakib', 'Shoriful Raj', 'Jashim', 'Rubel', 'Salman Shah']

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Chemistry', price: 120},
    {id: 3, name: 'Math', price: 130},
    {id: 4, name: 'Biology', price: 150},

  ]

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]
  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>


      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}


      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="5" score="80"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'Shams', age: 12 }
  return <h3>I am {person.name} with age: {age + money}</h3>
}

function Device(props) {
  console.log(props)
  return <h2>This Device: {props.name} price:{props.price}</h2>
}

const { grade, score } = { garde: "7", score: "99" };
function Student({ grade = 1, score = 0 }) {
  console.log(grade.score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>Grade: {props.grade}</p>
      <p>Score: {props.score}</p>
      <p>Age: </p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Demo devo</h5>
      <p>Coding: </p>
    </div>
  )
}



export default App

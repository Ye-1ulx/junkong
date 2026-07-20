import { useState } from 'react'
import './App.css'

function Card({ name, age, hobby }) {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>나이 : {age}살</p>
      <p>취미 : {hobby}</p>
    </div>
  )
}

function App() {

  const friends = [
    { name: '예은', age: 18, hobby: '베이킹' },
    { name: '철수', age: 19, hobby: '축구' },
    { name: '영희', age: 18, hobby: '독서' }
  ]
  
  return (
    <div>
      <h1>친구 카드 목록</h1>
      
      {friends.map((friend) => (
        <Card 
          key={friend.name} 
          name={friend.name} 
          age={friend.age} 
          hobby={friend.hobby} 
        />
      ))}
    </div>
  )
}

export default App
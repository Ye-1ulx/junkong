import { useState } from 'react'
import './App.css'

// 1. name을 활용해서 개별 클래스명을 추가했습니다!
function Card({ name, age, hobby }) {
  return (
    <div className={`card card-${name}`}> 
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
      <div className="card-container">
        {friends.map((friend) => (
          <Card 
            key={friend.name} 
            name={friend.name} 
            age={friend.age} 
            hobby={friend.hobby} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
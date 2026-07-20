import { useState } from 'react'
import './App.css'

function Card({ name, age, hobby }) {
  // 좋아요 상태를 true / false로 관리합니다 (처음엔 안 눌린 상태니 false)
  const [isLiked, setIsLiked] = useState(false) 

  return (
    <div className={`card card-${name}`}> 
      <h2>{name}</h2>
      <p>나이 : {age}살</p>
      <p>취미 : {hobby}</p>
      
      {/* ↙️ 좋아요 토글 버튼 영역 (숫자는 지웠습니다!) */}
      <div className="like-area">
        <button 
          className={`like-btn ${isLiked ? 'active' : ''}`} 
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? '❤️ 좋아요' : '🤍 좋아요'}
        </button>
      </div>
    </div>
  )
}

function App() {
  const friends = [
    { name: '예은', age: 18, hobby: '베이킹' },
    { name: '도연', age: 18, hobby: '댄스' },
    { name: '영희', age: 18, hobby: '독서' }
  ]
  
  return (
    <div>
      <h1>친구 목록</h1>
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
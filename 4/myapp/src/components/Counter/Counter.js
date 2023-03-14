import React, { useState } from 'react'


function Counter() {
  //let likes = 0;
  // const numebrs= [1,,2,3,4,5]
  // const[likes, setLikes] = useState(numbers);

  let [likes, setLikes] = useState(0);

  const decrement = ()=>{
    setLikes(--likes)
  }
  const increment = ()=>{
    setLikes(++likes)
  }
  return (
    <div>
   <p>{likes}</p>
   <button onClick= {decrement}>-</button>
   <button onClick= {increment}>+</button>
    </div>
  );
}

export default Counter;

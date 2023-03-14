import React, { useState } from 'react'

export default function Texts() {

  let [ colored, setColored ] = useState(true);

  const text_style = {
    color: colored ? 'red' : 'black'
  }

  const change_color = () => { 
    setColored(colored = !colored)
  }

  return (
    <div>
      <p style={text_style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo, voluptas dicta iure pariatur quis impedit consequuntur! Minus doloribus consectetur laudantium commodi. Maiores quasi similique inventore sint architecto labore odio?</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus excepturi accusamus aut nesciunt. Deleniti ad voluptatibus voluptas voluptatum natus, nisi blanditiis repellat at reiciendis corrupti accusantium aliquam esse iusto?</p>

      <button onClick={change_color}>Change color</button>
    </div>
  )
}
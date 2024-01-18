import { useState } from 'react'
import './App.css'
import {Message} from "./Message.tsx";
import {ListGroup} from "./componentes/ListGroup/ListGroup.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-6xl mx-auto p-20">
          <ListGroup/>
      </div>
    </>
  )
}

export default App

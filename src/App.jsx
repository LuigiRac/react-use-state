import { useState } from 'react'
import HtmlContent from "./Components/HtmlContent.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HtmlContent />
      </div>

    </>
  )
}

export default App
